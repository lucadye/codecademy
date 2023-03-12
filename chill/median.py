from sort import merge as sort
    
def find_median(nums):
    while len(nums) > 2:
        del nums[0]
        del nums[-1]
    if len(nums) == 2:
        return (nums[0] + nums[1]) / 2
    else:
        return nums[0]


if __name__ == '__main__':
    nums = []
    print("# type 'done' when you've inputed all your numbers.")
    input_ = input('# ')
    while input_ != 'done':
        try:
            nums.append(int(input_))
            input_ = input('# ')
            continue
        except TypeError:
            try:
                nums.append(float(input_))
                input_ = input('# ')
                continue
            except TypeError:
                input_ = input('# ')
                continue
        except ValueError:
            try:
                nums.append(float(input_))
                input_ = input('# ')
                continue
            except TypeError:
                input_ = input('# ')
                continue
            except ValueError:
                input_ = input('# ')
                continue
    if len(nums) < 1:
        print('# you must input at least one number!')
        quit()
    print(find_median(nums))