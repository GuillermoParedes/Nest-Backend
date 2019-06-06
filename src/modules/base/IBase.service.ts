/**
 * @author: Guillermo David
 * @twitter: @_gd_dev_
 * @email: gdavid.ptorrez@gmail.com
 */

export interface IBaseService<T> {
  getAll(): Promise<T[]>;
  get(id: number): Promise<T>;
  update(entity: T): Promise<T>;
  create(entity: T): Promise<number>;
  delete(id: number);
}
