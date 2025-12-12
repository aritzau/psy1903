summarize_behavior <- function(data, rt_min = 300, rt_max = 900) {
  data$correct <- as.logical(data$correct)
  rt_correct <- data$rt(data$correct & !is.na(data$rt) & data$rt >= rt_min & data$rt <= rt_max)
  mean_rt_correct <- mean(rt_correct, na.rm == TRUE)
  behavior <- data.frame(
    mean_rt_correct = mean_rt_correct,
    mean_accuracy = mean_accuracy
  )
  return(behavior)
}
