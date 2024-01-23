export default interface RepositoryInterface<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T>;
    save(entity: T): Promise<void>;
    delete(id: string): Promise<void>;
    create(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
}