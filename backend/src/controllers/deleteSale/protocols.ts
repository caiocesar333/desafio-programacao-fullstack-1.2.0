import { Sale } from "../../models/sale";

export interface IDeleteUserRepository {
    deleteUser(id: string): Promise<Sale>
}