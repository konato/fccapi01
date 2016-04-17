#Konato FreeCodeCamp Timestamp microservice
Should replicate the following Timestamp microservice https://timestamp-ms.herokuapp.com/

##User stories:
I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
If it does, it returns both the Unix timestamp and the natural language form of that date.
If it does not contain a date or Unix timestamp, it returns null for those properties.
##Example usage:
https://freecodecampapi01-stephaner.c9users.io/January%201,%202016
https://freecodecampapi01-stephaner.c9users.io/December%2015,%202015
https://freecodecampapi01-stephaner.c9users.io/1450137600
https://freecodecampapi01-stephaner.c9users.io/public/index.html
##Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }