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