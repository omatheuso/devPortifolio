package main

import (
	"fmt"
	"strings"
)

func main() { // this is acctually the only function that the application will run, so every other func have to be inside main
	// fmt.Println(conferenceName)
	// fmt.Println(&conferenceName)   // this command prints the memory location (physical) of the conferenceName variable
	//var bookings [50]string //this is an array with defined size
	// fmt.Printf("conferenceName is a %T type, conferenceTickets is a %T type and remainingTickets is a %T type.\n", conferenceName, conferenceTickets, remainingTickets)
	//var bookings = [50]string{} //arrays in go have fixed size (how many elements the array can hold) and the data type is fixed
	// var testList [4]string
	// testList[0] = "A"
	// testList[1] = "B"
	// testList[2] = "C"
	// testList[3] = "D"
	// testList[4] = "E" // and exemple where GOlang demonstrate where u cannot mistype something even before running the application

	var conferenceName = "Go Conference"
	const conferenceTickets = 50
	var remainingTickets uint = 50 // uint so the number cannot be negative
	var bookings []string //this is an slice, which is kind an array, but with unlimited size

	greetUsers(conferenceName)

	// fmt.Printf("Welcome to our %v booking application.\n", conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available.\n", conferenceTickets, remainingTickets)
	fmt.Println("Get your tickets here to attend.")

	for remainingTickets > 0 && len(bookings) < 50 {
		var firstName string
		var lastName string
		var email string
		var userTickets int

		//ask for their name
		fmt.Println("Enter your first name, please:")
		fmt.Scan(&firstName)

		fmt.Println("Enter your last name, please:")
		fmt.Scan(&lastName)

		fmt.Println("Enter your email address, please:")
		fmt.Scan(&email)

		fmt.Println("Enter the number of wanted tickets, please:")
		fmt.Scan(&userTickets)

		//var isValidName bool = len(firstName) >= 2 && len(lastName) >= 2
		isValidName := len(firstName) >= 2 && len(lastName) >= 2

		isEmailValid := strings.Contains(email, "@")

		isValidTicketNumber := userTickets > 0 && userTickets <= int(remainingTickets)

		if isValidName && isEmailValid && isValidTicketNumber  {
			remainingTickets = remainingTickets - uint(userTickets)
			//bookings[0] = firstName + " " + lastName //this method is like an append() but it puts a new input specfically on a given position
			bookings = append(bookings, firstName+" "+lastName) //this method append an info to the end of the slice(flexible array)

			// fmt.Printf("The whole slice: %v\n", bookings)
			// fmt.Printf("The slice first value: %v\n", bookings[0])
			// fmt.Printf("The slice size value: %v\n", len(bookings))
			// fmt.Printf("The slice type value: %T\n", bookings)

			fmt.Printf("Thank you %v %v for booking %v tickets. You will receive a confirmation email at %v\n", firstName, lastName, userTickets, email)
			fmt.Printf("Tell all your friends that there's just %v tickets left.\n", remainingTickets)

			firstNames := []string{}
			for _, booking := range bookings { //the underscore variable is made to DECLARE an unused variable that needs to exist, but will not be used, commonly needed in forLoops

				var names = strings.Fields(booking)
				//var firstName = names[0]
				firstNames = append(firstNames, names[0])
				fmt.Printf("The first names of bookings are: %v\n", firstNames)
			}

			noTicketsRemaining := remainingTickets == 0
			if noTicketsRemaining {
				// end program
				fmt.Println("Our conference is booked out. Come back next year.")
				break
			}
		} else {
			if !isValidName {
				fmt.Println("First name or last name you've entered is too short, please input it again.")
			}
			if !isEmailValid {
				fmt.Println("The email address is incorrect, please input it again.")
			}
			if !isValidTicketNumber {
				fmt.Println("The number of tickets you asked for is not available, please try again.")
			}
			fmt.Println("Your input data is not valid, please, try again.")
		}
	}
	// city := "London"

	// switch city {
	// 	case "New York", "Singapore": // is possible tu use multiple variables with the same logic
	// 		//execute code for this city
	// 	case "Hong Kong":
	// 		//execute code for this city
	// 	case "London":
	// 		//execute code for this city
	// 	default:
	// 		// code block for no valid city selected
	// 		fmt.Println("No valid city selected...")
	// }
}

func greetUsers (confName string) {
	fmt.Printf("Welcome to our %v!\n", confName)
}
