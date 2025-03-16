#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// #include <limits.h>
// #include <errno.h>
#include <regex.h>

#define INPUT_SIZE 64
#define BUFFER_SIZE 32
#define MAX_SANITIZED_SIZE 100

void sanitize_input(const char *input, char *sanitized, size_t max_len) {
    strncpy(sanitized, input, max_len);
    sanitized[max_len - 1] = '\0';
}

int validate_input(const char *input) {
    regex_t re;
    regcomp(&re, "^[a-zA-Z0-9 ]+$", REG_EXTENDED);

    int match = regexec(&re, input, 0, NULL, 0);
    regfree(&re);

    if (match == 0) {
        return 1; 
    } else {
        return 0; 
    }
}

void vuln_function() {
    char buffer[BUFFER_SIZE]; 
    char sanitized_buffer[MAX_SANITIZED_SIZE];

    printf("Enter some text: ");

    if (fgets(buffer, sizeof(buffer), stdin) == NULL) {
        perror("Error reading input");
        return;
    }

    size_t len = strlen(buffer);

    if (buffer[len - 1] != '\n') {
        fprintf(stderr, "Input too long\n");
        int c;
        while((c = getchar()) != '\n' && c != EOF);
        return;
    }
    buffer[len - 1] = '\0';

    sanitize_input(buffer, sanitized_buffer, sizeof(sanitized_buffer));

    if (!validate_input(sanitized_buffer)) {
        fprintf(stderr, "Invalid input\n");
        return;
    }

    printf("You entered: %s\n", sanitized_buffer);
}

int main() {
    vuln_function();
    return 0;
}