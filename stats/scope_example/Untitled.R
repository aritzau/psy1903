dir.create("~/Desktop/psy1903/stats/scope_example")
setwd("~/Desktop/psy1903/stats/scope_example")

#### Global vs. Local Variable x -----------------------------------------------
x <- 10          # Global variable x is defined as 10

## Create function to print variable x
my_function <- function() {
  x <- 20       # Local variable within the function x is defined as 20
  print(x)      # This will print 20 (the local variable x)
}

my_function()   # Call the function. This will print 20 (the local variable x)
print(x)        # Outside the function, this will print 10 (the global variable x)


x <- 10  # Global variable x is defined as 10

# Create a loop that defines x within the loop
for(i in 1:3) {
  x <- 20  # Local variable x inside the loop
  print(x)  # This will print 20, the local x inside the loop
}

print(x)  # Outside the loop, global x will have been overwritten as 20

my_function <- function() {
  x * 2
}
my_function() # Produces the error: "Error in my_function() : object 'x' not found" because x is not defined in either global or local environment

## Function with variable x set in global environment
x <- 10
my_function <- function() {
  x * 2
  ls()
}
my_function() # Uses global variable x, which is assigned the value of 10, and outputs 20. Will cause errors after removing global variable x, or will not update x as expected

## Function with argument x set
my_function <- function(x) {
  print(x)
  result <- x*2
  #print
}

my_function(5)






















