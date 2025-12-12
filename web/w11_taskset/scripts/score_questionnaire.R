score_questionnaire <- function(json_string) {
  responses <- jsonlite::fromJSON(json_string)
  responses <- unlist(responses)
  reverse_items <- c(2, 5, 9)
  responses[reverse_items] <- 4 - responses[reverse_items]
  total_score <- sum(responses)
  
  return(total_score)
}

