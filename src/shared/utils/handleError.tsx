export function handleError(message: string) {
  if (message.startsWith("SQLITE_CONSTRAINT")) {
    return "student id and email must be unique";
  } else if (message.startsWith("You are not authorized")) {
    return "You are not authorized to add admin or super admin";
  } else {
    return "unknown error occured";
  }
}
