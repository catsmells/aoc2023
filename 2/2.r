x <- readLines("2.dat")
extr_col <- \(clr) sapply(regmatches(x, gregexpr(clr, x, perl = T)), \(z) max(as.integer(z)))
res <- sapply(paste0("\\d+(?= ", c("r", "g", "b"), ")"), extr_col)
sum(which(apply(res, 1, \(x) max(x - 12:14) <= 0L)))
sum(apply(res, 1, prod))
