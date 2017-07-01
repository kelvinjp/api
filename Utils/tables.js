/**
 * tables 
 * 
Categories
Companies
Currencies
Customers
DocumentTypes
Documents
DocumentsDetails
DocumentsStatuses
Expenses
Payments
Products
Suppliers
SuppliersTypes
Taxes
Units
Users
 */
obj_Categories = {
    "Object": "Categories",
    "forms": {
        "fiels": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "true"
            },
            {
                "name": "Name",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "true"
            },
            {
                "name": "ParentCategoryId",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "true"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 


obj_Companies = {
    "Object": "Companies",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "MainCurrencyId",
                "requiered": "true",
                "type": "string",
                "max": 3,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Name",
                "requiered": "false",
                "type": "string",
                "max": 200,
                "min": null,
                "editable": "false"
            },
            {
                "name": "IdentificationNumber",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "IdentificationType",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Email",
                "requiered": "false",
                "type": "string",
                "max": 200,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Phone",
                "requiered": "false",
                "type": "string",
                "max": 25,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Mobile",
                "requiered": "false",
                "type": "string",
                "max": 25,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Fax",
                "requiered": "false",
                "type": "string",
                "max": 25,
                "min": null,
                "editable": "false"
            },
            {
                "name": "AddressLine1",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "AddressLine2",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "City",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LogoUrl",
                "requiered": "false",
                "type": "number",
                "max": 65535,
                "min": null,
                "editable": "false"
            },
            {
                "name": "State",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CountryId",
                "requiered": "false",
                "type": "string",
                "max": 3,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_Currencies = {
    "Object": "Currencies",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "string",
                "max": 3,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Name",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "ExchangeRate",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 

obj_Customers = {
    "Object": "Customers",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CompaniesId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Name",
                "requiered": "true",
                "type": "string",
                "max": 200,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CurrencyId",
                "requiered": "true",
                "type": "string",
                "max": 3,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "IdentificationNumber",
                "requiered": "false",
                "type": "string",
                "max": 40,
                "min": null,
                "editable": "false"
            },
            {
                "name": "IdentificationType",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "ContactFirstName",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "ContactLastName",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Email",
                "requiered": "false",
                "type": "string",
                "max": 200,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Phone",
                "requiered": "false",
                "type": "string",
                "max": 25,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Mobile",
                "requiered": "false",
                "type": "string",
                "max": 25,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Fax",
                "requiered": "false",
                "type": "string",
                "max": 25,
                "min": null,
                "editable": "false"
            },
            {
                "name": "AddressLine1",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "AddressLine2",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "City",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "State",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CountryId",
                "requiered": "false",
                "type": "string",
                "max": 3,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_DocumentTypes = {
    "Object": "DocumentTypes",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Name",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdatedBy",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_Documents = {
    "Object": "Documents",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CurrencyId",
                "requiered": "true",
                "type": "string",
                "max": 3,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CustomerId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "StatusId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CompaniesId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "TypeId",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "DocumentsId",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Number",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Date",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "ExpirationDate",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Footer",
                "requiered": "false",
                "type": "string",
                "max": 400,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Amount",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "PurchaseOrder",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "ExchangeRate",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Memo",
                "requiered": "false",
                "type": "number",
                "max": 65535,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Subheading",
                "requiered": "false",
                "type": "string",
                "max": 400,
                "min": null,
                "editable": "false"
            },
            {
                "name": "NumberPrefix",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Status",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UsersId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_DocumentsDetails = {
    "Object": "DocumentsDetails",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "ProductsId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "DocumentsId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "TaxesId",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UnitsId",
                "requiered": "false",
                "type": "string",
                "max": 10,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Description",
                "requiered": "false",
                "type": "number",
                "max": 65535,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Quantity",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Price",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "DiscountValue",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "DiscountType",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Amount",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 

obj_DocumentsStatuses = {
    "Object": "DocumentsStatuses",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Name",
                "requiered": "true",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 

obj_Expenses = {
    "Object": "Expenses",
    "forms": {
        "items": [
            {
                "name": "id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "SuppliersId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "DocumentsId",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Description",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Date",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Value",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Status",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdatedBy",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_Payments = {
    "Object": "Payments",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CurrencyId",
                "requiered": "true",
                "type": "string",
                "max": 3,
                "min": null,
                "editable": "false"
            },
            {
                "name": "DocumentsId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Date",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Type",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Amount",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "ExchangeRate",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Reference",
                "requiered": "false",
                "type": "string",
                "max": 200,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Memo",
                "requiered": "false",
                "type": "number",
                "max": 65535,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "DocumentId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_Products = {
    "Object": "Products",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CompanyId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Name",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Description",
                "requiered": "false",
                "type": "string",
                "max": 50,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CategoriesId",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "TaxesId",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UnitsId",
                "requiered": "false",
                "type": "string",
                "max": 10,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Cost",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Price",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CategoryId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_Suppliers = {
    "Object": "Suppliers",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "SuppliersTypesId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Name",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "IdentificationNumber",
                "requiered": "false",
                "type": "string",
                "max": 40,
                "min": null,
                "editable": "false"
            },
            {
                "name": "IdentificationType",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Phone",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_SuppliersTypes = {
    "Object": "SuppliersTypes",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Name",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_Taxes = {
    "Object": "Taxes",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CompaniesId",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Name",
                "requiered": "true",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "value",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CretatedBy",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdate",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "UpdateBy",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdate",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_Units = {
    "Object": "Units",
    "forms": {
        "items": [
            {
                "name": "id",
                "requiered": "true",
                "type": "string",
                "max": 10,
                "min": null,
                "editable": "false"
            },
            {
                "name": "name",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdatedBy",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 
obj_Users = {
    "Object": "Users",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CompanyId",
                "requiered": "false",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "TypeId",
                "requiered": "true",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Username",
                "requiered": "true",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "email",
                "requiered": "false",
                "type": "string",
                "max": 45,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Password",
                "requiered": "true",
                "type": "number",
                "max": 64,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Enabled",
                "requiered": "true",
                "type": "number",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "FirstName",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastName",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "Created",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "CreatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "true",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdatedBy",
                "requiered": "false",
                "type": "string",
                "max": 100,
                "min": null,
                "editable": "false"
            },
            {
                "name": "LastUpdated",
                "requiered": "false",
                "type": "date",
                "max": null,
                "min": null,
                "editable": "false"
            }
        ]
    }
}; 