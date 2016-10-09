initSidebarItems({"fn":[["abort","One helper function that can be used to return HTTP Error inside a view function."],["escape","Replace special characters \"&\", \"<\", \">\" and (\") to HTML-safe characters."],["redirect","Returns a response that redirects the client to the target location."],["safe_join","Safely join directory and filename, otherwise this returns None."],["send_file","Sends the contents of a file to the client.  Please never pass filenames to this function from user sources without checking them first.  Set `as_attachment` to `true` if you want to send this file with a `Content-Disposition: attachment` header.  This will return `NotFound` if filepath is not one file."],["send_from_directory","Send a file from a given directory with `send_file`.  This is a secure way to quickly expose static files from an folder.  This will guess the mimetype for you."]],"trait":[["PathBound","Path bound trait."]]});