"""
Implement the Fraction class below passing all
the test cases in the doc-tests.

    >>> a = Fraction(1, 2)
    >>> b = Fraction("1/4")
    >>> print(a)
    1/2
    >>> print(b)
    1/4
    >>> print(a + b)
    3/4
    >>> print(a - b)
    1/4
    >>> print(a * b)
    1/8
    >>> print(a / b)
    2/1
    >>> float(a)
    0.5
    >>> float(b)
    0.25
    >>> c = Fraction(33, 99)
    >>> print(c)
    1/3
    
"""
class Fraction:
    """
    This class implements fractional numbers.
    If instantiated with two arguments in the constructor
    expression, each argument must be an integer representing
    the numerator and the denominator. If the constructor
    expession is passed with single argument, then the argument
    must be a string of the form "n/d" when n represents numerator
    and d represents denominator.

    For example:  
        >>> a = Fraction(1, 2) # Create a fraction 1/2
        >>> b = Fraction("1/4") # Create a fraction 1/4
        >>> c = a + b   # Add the two fractions
        >>> print(c)    # Print the string representation of c
        3/4
        >>> a > b
        True
        >>> c == b
        False


    """
    def __init__(self,num1,num2):
        
        self.num1 = num1
        self.num2 = num2

if __name__ == '__main__':
    import doctest
    doctest.testmod()