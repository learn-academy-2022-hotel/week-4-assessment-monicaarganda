# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# PSUEDOCODE:
    # can use the built in method even? or odd?
    # Create a method 'even_or_odd', every def needs a end
    # pass a 'number' in to the methods parameters
    # use a conditional statement: 
    # if the number is even use built in method .even? to determine, then use string interpolation to print '#{variable} is evem'
    # if the is the number is odd print a statement using string interpolation '#{variable} is odd'
    # then call on the variable in the methods parameters

    # used this before I realized I planned to use the Ruby built in method .even?
        # def even_or_odd num
        #     if num % 2 == 0
        #         p "#{num} is even"
        #     else
        #         p "#{num} is odd"
        #     end
        # end

        def even_or_odd num
            if num.even?
                p "#{num} is even"
            else
                p "#{num} is odd"
            end
        end

        even_or_odd(num1)
            # output: "7 is odd"
        even_or_odd(num2)
            # output: "42 is even"
        even_or_odd(num3)
            # output: "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
    
# PSUEDOCODE:
    # can use the built in method .delete "aeiou"
    # Create a method called 'remove_vowels', every def needs a end
    # pass a 'string' in to the methods parameters
    # print the 'string' using the .delete method to delete all of the vowels in the variable given, since some of the variables have capital letters I included the capital letters as well
    # then call on the variable in the methods parameters

        def remove_vowels string
            p string.delete "aeiouAEIOU"
        end

        remove_vowels(beatles_album1)
            # output: "Rbbr Sl"
        remove_vowels(beatles_album2)
            # output: "Sgt Pppr"
        remove_vowels(beatles_album3)
            # output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
        
# PSUEDOCODE:
    # can use the built in method .reverse
    # Create a method 'palindrome', every def needs a end
    # pass a 'string' in to the methods parameters
    # use a conditional statement 
    # if the 'string' is a palindrome set it = to the 'string' using built in method .reverse then use string interpolation to print '#{variable} a palindrome'
    # if the is the number is not equal to itself in reverse then print a statement using string interpolation '#{variable} is not a palindrome'
    # then call on the variable in the methods parameters
    # Due to some of the variable's first or all letters being capital casing, attach .downcase to both 'string's' being called on in the if statement. This will downcase the variable in order to see if the word itself is a palindrome with out the casing affecting it.

        def palindrome string
            if string.downcase == string.reverse.downcase
                p "#{string} is a palindrome"
            else 
                p "#{string} is not a palindrome"
            end
        end


        palindrome(palindrome_tester1)
            # output: "Racecar is a palindrome"
        palindrome(palindrome_tester2)
            # output: "LEARN is not a palindrome"
        palindrome(palindrome_tester3)
            # output: "Rotator is a palindrome"

