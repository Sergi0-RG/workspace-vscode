#include <stdio.h>

int main() {
    int num;
    printf("Introduzca número de serie:\n");
    scanf("%d", &num);
    
    if (num == 33) {
        printf("Número de serie correcto.\n");
    } else {
        printf("ERROR: Número incorrecto\n");
    }

    return 0;
}