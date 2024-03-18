def solution(numbers):
    answer = []
    for i in range(len(numbers)):
        found_bigger = False
        for j in range(i + 1, len(numbers)):
            if numbers[j] > numbers[i]:
                answer.append(numbers[j])
                found_bigger = True
                break
        if not found_bigger:
            answer.append(-1)
    return answer

    
    return answer

numbers=[2,3,3,5]
print(solution(numbers))


