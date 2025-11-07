x <- 3.14
typeof(x)
class(x)
is.numeric(x)

int <- 5L
typeof(int)


word <- "hello"
typeof(word)

flag <- TRUE
typeof(flag)
flag2 <- F
typeof(flag2)

missing <- NA
is.na(missing)

scores <- c(90, 85, NA, 88)
scores
mean(scores)
x + missing
mean(scores, na.rm = TRUE)

is.na(scores)

scores2 <- na.omit(scores)

numeric_vector <- c(1.5, 2.3, 5.0)  # Numeric vector
character_vector <- c("apple", "banana", "cherry")  # Character vector
typeof(character_vector) # Will output "character" in the console window

my_matrix <- matrix(1:9, nrow = 3, ncol = 3)  # 3x3 matrix

my_data <- data.frame(
  id = 1:3,
  name = c("Alice", "Bob", "Charlie"),
  score = c(85.5, 92.0, 88.5)
)

my_function <- function(x, y) {
  return(x + y)
}
my_function(3, 5)

fruits <- c("apple", "banana", "cherry", "date")
fruits[1]       # first element
fruits[2:4]     # elements 2 through 4
fruits[-1]      # all but the first element

nums <- c(5, 10, 15, 20)
nums[c(TRUE, FALSE, TRUE, FALSE)]  # selects 5 and 15
nums[nums > 10]  

scores <- c(math = 90, english = 85, science = 92)
scores["math"]
scores[c("math", "science")]

student <- list(
  name = "Alex",
  age = 20,
  scores = c(88, 92, 95)
)


df <- data.frame(
  id = 1:4,
  name = c("Alice", "Bob", "Carmen", "Diego"),
  score = c(88, 92, 95, 90)
)

df[1, ]       # selects the first row (all columns)
df[, 2]       # selects the second column (all rows)
df[1:2, c(1, 3)]  # selects rows 1–2 and columns 1 and 3

data <- data.frame(
  subject_id = 1:20,
  rt = c(470, 360, 665, 400, 445, 270, 500, 565, 350, 445,
         275, NA, 600, 290, 560, 375, 450, 480, 325, 430),
  congruent = c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE,
                FALSE, TRUE, TRUE, TRUE, FALSE, FALSE, TRUE,
                TRUE, FALSE, TRUE, FALSE, TRUE, FALSE),
  color = c("red", "blue", "blue", "green", "red", "red", "blue",
            "green", "blue", "green", "red", "blue", "green", "blue",
            "green", "red", "blue", "blue", "green", "red")
)

