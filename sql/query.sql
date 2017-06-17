--Currencies
NSERT INTO `Currencies` (Id,`Enabled`, `Name`, `ExchangeRate`) VALUES('USD',1, 'US DOLLAR', 47);
SELECT * FROM Currencies; 
DELETE FROM Currencies WHERE ID = '0'; 

--Conpanies
SELECT * FROM invoicing.Companies;
INSERT INTO `invoicing`.`Companies` (`Id`, `MainCurrencyId`, `Enabled`, `Name`, `IdentificationNumber`, `IdentificationType`, `Email`) VALUES ('0', 'DOP', '1', 'KJP', '13600184371', 'Cedula', 'kelvinpimentel@gmail.com');

--Users
SELECT * from Users ;
INSERT INTO `Users` ( `CompanyId`, `Username`, `Password`) VALUES ('0', 'kelvinjp2', 'kelvinjp');

"Id", "CompanyId", "Username", "FirstName", "LastName", "Enabled", "email"


SELECT CONCAT("Alter Table `", facturing,"`.`", TABLE_NAME, "` DROP COLUMN LastUpdate") as MySQLCMD 
FROM TABLES 

-- Companies
 -- Products
 -- Users
 -- Categories
 -- Currencies
 -- Customers
 -- Documents
 -- DocumentsDetails
 -- DocumentsStatuses
 -- DocumentsTypes
 -- Payments
 -- Products
ALTER TABLE Companies CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE Products CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE Users CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE Categories CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE Currencies CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE Customers CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE Documents CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE DocumentsDetails CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE DocumentsStatuses CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE DocumentsTypes CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE Payments CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE Products CHANGE LastUpdated LastUpdated  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;