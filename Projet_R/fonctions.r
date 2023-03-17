est_numero_valide <- function(numero) {
  if (nchar(numero) != 7) {
    return(FALSE)
  }
  for (c in strsplit(numero, "")[[1]]) {
    if (!is.numeric(c) && !is.uppercase(c)) {
      return(FALSE)
    }
  }
  return(TRUE)
}

is.uppercase <- function(x) {
  return(x %in% LETTERS)
}
a<-est_numero_valide("A2SCV4E")
print(a)
