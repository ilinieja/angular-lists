export abstract class ResourceModel<T> {
  public id?: string;

  constructor(model?: Partial<T>) {
    if (model) {
      Object.assign(this, model);
    }
  }

  public serialize(): any {
    return JSON.parse(JSON.stringify(this));
  }
}
