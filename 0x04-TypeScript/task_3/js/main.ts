/// <reference path="./crud.d.ts" />
import { RowID } from "./interface";
import { RowElement } from "./interface";
import * as CRUD from "./crud";

/**
 * Create an object called row with the type RowElement with the fields set to these values:

firstName: Guillaume
lastName: Salva
Create a const variable named newRowID with the type RowID and assign the value the insertRow command.

Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23

Finally, call the updateRow and deleteRow commands.
 */

export const row: { firstName: string, lastName: string} = {
    firstName: "Guillaume",
    lastName: "Salva"
}

export const newRowID: RowID = CRUD.insertRow(row);

export const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23};
CRUD.updateRow(newRowID, updatedRow)

CRUD.deleteRow(newRowID);
