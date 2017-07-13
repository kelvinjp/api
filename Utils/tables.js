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
        "items": [
            {
                "name": "Id",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 0,
                "show": false,
                "editable": true
            },
            {
                "name": "Name",
                "requiered": true,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "ParentCategoryId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": false,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "MainCurrencyId",
                "requiered": true,
                "type": "string",
                "max": 3,
                "min": 3,
                "show": true,
                "editable": true
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "Name",
                "requiered": false,
                "type": "string",
                "max": 200,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "IdentificationNumber",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "IdentificationType",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "Email",
                "requiered": false,
                "type": "string",
                "max": 200,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Phone",
                "requiered": false,
                "type": "string",
                "max": 25,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Mobile",
                "requiered": false,
                "type": "string",
                "max": 25,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "Fax",
                "requiered": false,
                "type": "string",
                "max": 25,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "AddressLine1",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "AddressLine2",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "City",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "LogoUrl",
                "requiered": false,
                "type": "string",
                "max": 65535,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "State",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "CountryId",
                "requiered": false,
                "type": "string",
                "max": 3,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "string",
                "max": 3,
                "min": 3,
                "show": true,
                "editable": false
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "Name",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "ExchangeRate",
                "requiered": false,
                "type": "number",
                "max": 999999999,
                "min": 1,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "CompaniesId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Name",
                "requiered": true,
                "type": "string",
                "max": 200,
                "min": 1,
                "show": true,
                "editable": true
            },
            {
                "name": "CurrencyId",
                "requiered": true,
                "type": "string",
                "max": 3,
                "min": 3,
                "show": true,
                "editable": true
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "IdentificationNumber",
                "requiered": false,
                "type": "string",
                "max": 40,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "IdentificationType",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "ContactFirstName",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "ContactLastName",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Email",
                "requiered": false,
                "type": "string",
                "max": 200,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Phone",
                "requiered": false,
                "type": "string",
                "max": 25,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Mobile",
                "requiered": false,
                "type": "string",
                "max": 25,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Fax",
                "requiered": false,
                "type": "string",
                "max": 25,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "AddressLine1",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "AddressLine2",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "City",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "State",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "CountryId",
                "requiered": false,
                "type": "string",
                "max": 3,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Name",
                "requiered": true,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": true,
                "type": "string",
                "max": 100,
                "min": null,
                "show": true,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "CurrencyId",
                "requiered": true,
                "type": "string",
                "max": 3,
                "min": 3,
                "show": true,
                "editable": true
            },
            {
                "name": "CustomerId",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "StatusId",
                "requiered": true,
                "type": "number",
                "max": 99,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "CompaniesId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "DocumentsId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Number",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Date",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": true,
                "editable": true
            },
            {
                "name": "ExpirationDate",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": true,
                "editable": true
            },
            {
                "name": "Footer",
                "requiered": false,
                "type": "string",
                "max": 400,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Amount",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "PurchaseOrder",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "ExchangeRate",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Memo",
                "requiered": false,
                "type": "String",
                "max": 65535,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Subheading",
                "requiered": false,
                "type": "string",
                "max": 400,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "NumberPrefix",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Status",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "ProductsId",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "DocumentsId",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "TaxesId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "UnitsId",
                "requiered": false,
                "type": "string",
                "max": 10,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Description",
                "requiered": false,
                "type": "number",
                "max": 65535,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Quantity",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Price",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "DiscountValue",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "DiscountType",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Amount",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Name",
                "requiered": true,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            }
        ]
    }
};

obj_Expenses = {
    "Object": "Expenses",
    "forms": {
        "items": [
            {
                "name": "Id",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "SuppliersId",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "DocumentsId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Description",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Date",
                "requiered": true,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": true,
                "editable": true
            },
            {
                "name": "Value",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Status",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": true,
                "type": "string",
                "max": 100,
                "min": null,
                "show": true,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "CurrencyId",
                "requiered": true,
                "type": "string",
                "max": 3,
                "min": 3,
                "show": true,
                "editable": true
            },
            {
                "name": "DocumentsId",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Date",
                "requiered": true,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": true,
                "editable": true
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "Type",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": null,
                "show": true,
                "editable": true
            },
            {
                "name": "Amount",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "ExchangeRate",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Reference",
                "requiered": false,
                "type": "string",
                "max": 200,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Memo",
                "requiered": false,
                "type": "number",
                "max": 65535,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "DocumentId",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "CompanyId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Name",
                "requiered": true,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Description",
                "requiered": false,
                "type": "string",
                "max": 50,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "CategoriesId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "TaxesId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "UnitsId",
                "requiered": false,
                "type": "string",
                "max": 10,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Cost",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Price",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "SuppliersTypesId",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Name",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "IdentificationNumber",
                "requiered": false,
                "type": "string",
                "max": 40,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "IdentificationType",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Phone",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Name",
                "requiered": true,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "CompaniesId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "Name",
                "requiered": true,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Value",
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CretatedBy",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": null,
                "show": true,
                "editable": false
            },
            {
                "name": "LastUpdate",
                "requiered": true,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": true,
                "editable": true
            },
            {
                "name": "UpdateBy",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": null,
                "show": true,
                "editable": false
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
                "requiered": true,
                "type": "string",
                "max": 10,
                "min": 1,
                "show": true,
                "editable": true
            },
            {
                "name": "name",
                "requiered": false,
                "type": "string",
                "max": 45,
                "min": null,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": true,
                "type": "string",
                "max": 100,
                "min": null,
                "show": true,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": false
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
                "requiered": true,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "CompanyId",
                "requiered": false,
                "type": "number",
                "max": 2147483647,
                "min": 0,
                "show": true,
                "editable": false
            },
            {
                "name": "TypeId",
                "requiered": true,
                "type": "string",
                "max": 45,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Username",
                "requiered": true,
                "type": "string",
                "max": 100,
                "min": 4,
                "show": true,
                "editable": false
            },
            {
                "name": "email",
                "requiered": true,
                "type": "string",
                "max": 45,
                "min": 4,
                "show": true,
                "editable": false
            },
            {
                "name": "Password",
                "requiered": true,
                "type": "number",
                "max": 64,
                "min": 8,
                "show": true,
                "editable": true
            },
            {
                "name": "Enabled",
                "requiered": true,
                "type": "number",
                "max": 1,
                "min": 1,
                "show": false,
                "editable": true
            },
            {
                "name": "FirstName",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "LastName",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": true,
                "editable": true
            },
            {
                "name": "Created",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "CreatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            },
            {
                "name": "UpdatedBy",
                "requiered": false,
                "type": "string",
                "max": 100,
                "min": 0,
                "show": false,
                "editable": false
            },
            {
                "name": "LastUpdated",
                "requiered": false,
                "type": "date",
                "max": 27,
                "min": 10,
                "show": false,
                "editable": false
            }
        ]
    }
}; 