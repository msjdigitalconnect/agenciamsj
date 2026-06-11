import { useEffect, useState } from "react";

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: number;
};

const KEY = "msj:contacts";

function read(): Contact[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function write(list: Contact[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("msj:contacts:update"));
}

export function saveContact(c: Omit<Contact, "id" | "timestamp">): Contact {
  const entry: Contact = {
    ...c,
    id: crypto.randomUUID(),
    timestamp: Date.now(),
  };
  const list = read();
  list.push(entry);
  write(list);
  return entry;
}

export function deleteContact(id: string) {
  write(read().filter((c) => c.id !== id));
}

export function clearContacts() {
  write([]);
}

export function useContacts(): Contact[] {
  const [list, setList] = useState<Contact[]>(() => read());
  useEffect(() => {
    const handler = () => setList(read());
    window.addEventListener("msj:contacts:update", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("msj:contacts:update", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return list;
}
