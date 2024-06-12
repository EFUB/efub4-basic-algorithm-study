#include <stdio.h>

int temp[1 << 21] = { 0 }, arr[1 << 21] = { 0 }; //시프트 연산을 이용한 2의 제곱근 계산
int MergeSort(int* arr, int first, int last, int hand);
int Merge(int* arr, int first, int mid, int last, int hand);

int main() {
    int num = 0, hand = 0;
    scanf("%d", &num);
    for (int i = 0; i < num; i++) {
        scanf("%d", &arr[i]);
    }
    scanf("%d", &hand);
    hand = num / hand; //2명인 경우 hand=4
    MergeSort(arr, 0, num - 1, hand);
    for (int i = 0; i < num; i++) {
        printf("%d ", arr[i]);
    }
}

int MergeSort(int* arr, int first, int last, int hand) {
    int mid = 0;
    if (first < last) {
        mid = (first + last) / 2;
        MergeSort(arr, first, mid, hand);
        MergeSort(arr, mid + 1, last, hand);
        Merge(arr, first, mid, last, hand);
    }
}

int Merge(int* arr, int first, int mid, int last, int hand) {
    int i = first, j = mid + 1, idx = first;
    if ((last - first) <= hand) { //원소 개수가 4개를 넘어가면 그 다음 단계의 인원이 필요함
        while (i <= mid && j <= last) {
            if (arr[i] <= arr[j]) {
                temp[idx++] = arr[i++];
            }
            else {
                temp[idx++] = arr[j++];
            }
        }
    }
//정렬에 해당하지 않은 부분도 그대로 넣어주기
    while (i <= mid) {
        temp[idx++] = arr[i++];
    }
    while (j <= last) {
        temp[idx++] = arr[j++];
    }
//arr 배열에 그대로 다시 넣기
    for (int k = first; k <= last; k++) {
        arr[k] = temp[k];
    }
}
