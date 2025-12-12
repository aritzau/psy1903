compute_rt_if_missing <- function(data) {
  
  #---- APPROACH A: For-loop with if/else ----
#   for (i in 1:nrow(data)) {
#   if (is.na(data$rt[i])) {
#     if (!is.na(data$stim_onset_ms[i]) && 
#        !is.na(data$resp_time_ms[i]) && 
#        !is.na(data$response[i])) {
#.       data$rt[i] <- data$resp_time_ms[i] - data$stim_onset_ms[i]
#     }
#    }
# }
# }
  
  data$rt <- ifelse(
    is.na(data$rt) & !is.na(data$stim_onset_ms) & !is.na(data$resp_time_ms) & !is.na(data$response),
    data$resp_time_ms - data$stim_onset_ms,
    data$rt
  )
  
  return(data)
} 
####Used Ai on this question because of how much precise code, i nearly got there but ai helped polished my code eg using the !
  


