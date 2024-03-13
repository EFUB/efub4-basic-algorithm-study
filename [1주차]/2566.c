#include <stdio.h>


int main(){

  int num,x,y;
  int max=-1;
    for(int i=1; i<=9; i++){
        for(int k=1; k<=9 ; k++){
            scanf("%d",&num);
            
            if(max<=num){
                max=num;
                x=i;
                y=k;
            }
        }
    }
    printf("%d \n%d %d", max, x,y);
    return 0;
}