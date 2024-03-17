#include <stdio.h>
#define _CRT_SECURE_NO_WARNINGS

int main(){
    int background [100][100] ={0,};
    int n,x,y, count =0;
    scanf("%d", &n);
    for(int i=0; i<n, i++){
        scanf("%d %d", &x,&y);
        for(int j=y; j<y+10; j++){
            for(int k=x; k<x+10 ; k++)
                background[j][k]=1;
        }
    }
    for(int i=0; i<100; i++){
        for(int j=0; j<100; j++){
            if(background[i][j]==1)
                count++;
        }
    }
    printf("%d", count);
}