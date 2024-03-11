/* 
For primitive datatypes, Stack memory is used.
For reference/non-primitive datatypes, Heap memory is used.
Stack:  Stores the local variables and return addresses of functions. It has a fixed size (usually ) 
and stores data in CPU registers if possible.  The stack grows downwards from high address to low address.
Stack: Stores a copy of data.

Stack Memory:

Think of the stack like a stack of plates. When you call a function, a new plate (frame) is added to the top of the stack.
It's used for storing function call information, local variables, and the order of function calls.
Memory is managed automatically, and when a function completes, its plate is removed from the top of the stack.

Heap Memory:

The heap is like a large, unstructured storage area. It's used for dynamic memory allocation, such as creating objects and arrays.
Objects and data with longer lifetimes are stored in the heap, and memory needs to be managed manually 
(usually by the JavaScript engine or the garbage collector).
Objects in the heap can be referenced by multiple parts of your program.
In summary, the stack is for managing function calls and local variables with automatic memory management,
 while the heap is for dynamic memory allocation, particularly for objects with longer lifetimes, 
 and it requires manual or automatic memory management.

*/