#### Setup initial directory structure
setwd("~/Desktop/psy1903/r_foundations_practice")
getwd()

#### create a new R script called foundations_practice.r

dir.create("~/Desktop/psy1903/r_foundations_practice/foundations_practice.R")
setwd("~/Desktop/psy1903/r_foundations_practice/foundations_practice.R")
# Author: Annabella Ritzau
# Date: October 28, 2025
# Description: This script contains R programming that contains: basic data structures,and functions.

#### Variable Creation
age <- 19
name <- "Annabella"
is_psych_major <- TRUE
favorite_numbers <- 6, 12, 36, 42



##typeof + class
typeof(age)
class(age)
typeof(name)
class(name)
typeof(is_psych_major)
class(is_psych_major)
typeof(favorite_numbers)
class(favorite_numbers)

#### Create RTs
rt <- c(480, 530, 495, 610, 455, 390, 510, 565, 430, NA)##numeric vector
mean(rt)##496.5
sd(rt)##63.81614

rt_adjusted <- c(530, 580, 545, 660, 495, 440, 560, 615, 480, 550)##+50ms
mean.diff <- TRUE
typeof(rt)      
rt_adjusted <- F
typeof(rt_adjusted)      
is.logical(rt) 
####Add Missingness
is.na(rt)

summary(rt)
str(rt)


####Building a Data frame

##createvectors
subject_id <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
congruent <- c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE)
condition <- c("control", "control", "incongruent", "control", "incongruent", "control", "incongruent", "incongruent", "control", "incongruent")
experiment_data <-data.frame(
  subject_id = subject_id,
  congruent = congruent,
  condition = condition,
  rt = rt
)### usage of AI
##inspect
head(experiment_data)      # View the first few rows
str(experiment_data)       # See the structure of the data frame
summary(experiment_data)   # Get a summary of each column

##indexframeextration
rt <- c(480, 530, 495, 610, 455, 390, 510, 565, 430, NA)
rt[3]
rt[ rt > 500]
rt[1:5]

subject_id <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
subject_id [1:5]

##participant 4
experiment_data[experiment_data$subject_id == 4, ]

experiment_data$condition
experiment_data[, "condition"]

##logical subsetting:

fast_trials <- experiment_data[experiment_data$rt < 500, ]
fast_trials
nrow(fast_trials)

incongruent_trials <- experiment_data[experiment_data$congruent == FALSE, ]
incongruent_trials
nrow(incongruent_trials)

fast_incongruent <- experiment_data[experiment_data$rt < 500 & experiment_data$congruent == FALSE, ]
nrow(fast_incongruent)



##Data types
sapply(experiment_data, typeof)



####Question4
##Congruent RT Mean RT by congruency: Compute the mean RT when congruent is TRUE and when it is FALSE. Place the code and console output here:
# TRUE
mean(experiment_data$rt[experiment_data$congruent == TRUE], na.rm = TRUE)
#FALSE
mean(experiment_data$rt[experiment_data$congruent == FALSE], na.rm = TRUE)

##Condition
control_rt <- mean(experiment_data$rt[experiment_data$condition == "control"], na.rm = TRUE)
incongruent_rt <- mean(experiment_data$rt[experiment_data$condition == "incongruent"], na.rm = TRUE)
difference <- control_rt - incongruent_rt

##control is faster

##difference scores
congruent_rt <- mean(experiment_data$rt[experiment_data$congruent == TRUE], na.rm = TRUE)
incongruent_rt <- mean(experiment_data$rt[experiment_data$congruent == FALSE], na.rm = TRUE)
congruency_effect <- incongruent_rt - congruent_rt
print(paste("The congruency effect was", congruency_effect, "milliseconds."))

# difference (congruency effect)
congruency_effect <- incongruent_rt - congruent_rt

# Print the formatted message
print(paste("The congruency effect was", congruency_effect, "milliseconds."))

###question 5
rt_z <- (experiment_data$rt - mean(experiment_data$rt, na.rm = TRUE)) / sd(experiment_data$rt, na.rm = TRUE)
head(experiment_data)

#2
fast <- experiment_data$rt <500
head(experiment_data)

#3

new_participant <- data.frame(subject_id = 11, rt = 470, congruent = TRUE, condition = "control", rt_z = NA, fast = TRUE)
tail(new_participant)

#4
experiment_data$rt_z <- NULL
names(rt_z)

##clean subset

clean_experiment_data <- 
  experiment_data[!is.na(experiment_data$rt) & experiment_data$rt > 300 & experiment_data$rt < 700, ]
nrow(clean_experiment_data)
nrow(experiment_data)










