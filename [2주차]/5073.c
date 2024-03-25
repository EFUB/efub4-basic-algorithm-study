#include <stdio.h>

int max(int a, int b, int c){
    if(a > b){
        if(a > c) return a;
        else return c;
    }
    else{
        if(b > c) return b;
        else return c;
    }
}

int triangle(int a, int b, int c){
    if(max(a,b,c)==a){
        if(a>=b+c)
            return 0;
        else return 1;
    }
    else if(max(a,b,c)==b){
        if(b>=a+c)
            return 0;
        else return 1;
    }
    else if(max(a,b,c)==c){
        if(c>=b+a)
            return 0;
        else return 1;
    }
}
int main(){
    int a,b,c;
    scanf("%d %d %d" ,&a,&b,&c);
    while(a!=0 && b!=0 && c!=0){
        if(triangle(a,b,c)==1){
            if(a==b && b==c) printf("Equilateral\n");
            else if((a==b) || (b==c) || (c==a)) printf("Isosceles\n");
            else printf("Scalene\n");
        }
        else printf("Invalid\n");
        
        scanf("%d %d %d" ,&a,&b,&c);

    }
    
}