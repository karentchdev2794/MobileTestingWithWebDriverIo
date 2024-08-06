Feature: Create Reservation in Booking App

  Scenario Outline: Create Reservation -OK-Create Reservation with valid data

    Given I am user the booking App
    When I complete the place of trip with next data:
      | destination | <destination> |
      | initialDate | <initialDate> |
      | finalDate   | <finalDate>   |
      | rooms       | <rooms>       |
      | adults      | <adults>      |
      | childrens   | <childrens>   |
      | age         | <age>         |
    And I select the room of my preference
      | room | <room> |
    And I click the button Reserve
    And I complete my personal information
      | first_name    | <first_name>    |
      | last_name     | <last_name>     |
      | email_address | <email_address> |
      | country       | <country>       |
      | mobile_phone  | <mobile_phone>  |
    And I confirm the reservation
    Then I see the message "Your booking is confirmed"

Examples:
    | destination |initialDate | finalDate|rooms| adults | childrens |age | room  | first_name  | last_name|email_address  | country | mobile_phone | 
    | Cusco     | 2024-08-14 | 2024-08-28 | 1 | 1 | 1 | 5 | Incas Town Inn | Peru | 945867917 |