def merge(nums, by='asc'):
    if len(nums) < 2:
        return nums[0]

    left = nums[0:(len(nums) // 2)]
    right = nums[((len(nums) // 2) - 1):]

    left = merge(left)
    right = merge(right)

    l = 0
    if by == 'desc':
        while 0 < len(right):
            if right[0] > left[l]:
                left.insert(l, right[0].pop())
            elif l == (len(left) - 1):
                left.append(right[0].pop())
            else:
                l += 1
    else:
        while 0 < len(right):
            if right[0] < left[l]:
                left.insert(l, right[0].pop())
            elif l == (len(left) - 1):
                left.append(right[0].pop())
            else:
                l += 1

def bubble(nums, by='asc'):
    if by == 'desc':
        done = False
        while done == False:
            done_ = True
            i = 0
            while i < (len(nums) - 1):
                if nums[i] < nums[i + 1]:
                    done_ = False
                    x = nums[i].pop()
                    nums.insert(i + 1, x)
                done = done_
                i += 1
    else:
        done = False
        while done != True:
            done_ = True
            i = 0
            while i > (len(nums) - 1):
                if nums[i] < nums[i + 1]:
                    done_ = False
                    x = nums[i].pop()
                    nums.insert(i + 1, x)
                done = done_
                i += 1
    return nums
print(merge([1,8]))