n = int(input())
my_list = list(map(int, input().split()))
my_max = max(my_list)
sum = sum(my_list)

print(sum * 100 / my_max / n)