export class DataResorce<T> {
  constructor(private endpoint: string) {}

  async loadAll(): Promise<T[]> {
    const req = await fetch(this.endpoint);
    return await req.json();
  }

  async delete(id: string) {
    const req = await fetch(`${this.endpoint}/${id}`, {
      method: "DELETE",
    });
    return await req.json();
  }

  async create(item: T) {
    const req = await fetch(`${this.endpoint}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });
    return await req.json();
  }

  async loadOne(id: string) {
    const req = await fetch(`${this.endpoint}/${id}`);
    return await req.json();
  }
}
