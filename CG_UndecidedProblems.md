---
layout: page
title: Undecided Problems Team Tach 
permalink: /undecidedproblems/
---



## What is an Undecidable Problem? (Bella)

Some problems take a very long time to solve, so we use algorithms that give approximate solutions. There are some problems that a computer can never solve, even the world's most powerful computer with infinite time: the undecidable problems.




- An decidable problem is a decision problem for which an algorithm can be written to produce a correct number for all inputs (eg: is the number even) (Collegeboard AAP-4.B.1)
- An undecidable problem is one for which no algorith can be constructed that is always capable of providing a correct yes-or-no answer. (Collegeboard AAP-4.B.2) An undecidable problem may have some instances  that have an algorthimic solution, but there is no algorithmic solution that could solve all instances of the problem. 


# Halting Problem (Bella )

The Halting Problem is a classic example of an undecidable problem in computer science, formulated by Alan Turing in the 1930s. It addresses the fundamental question of whether a program, given any input, will eventually halt (terminate) or run indefinitely (enter an infinite loop).

The essence of the Halting Problem revolves around creating an algorithm that can accurately determine, for any program and input, whether that program will halt or continue running forever. Alan Turing proved that such an algorithm cannot exist.

For example, consider this program that counts down:
num ← 10
REPEAT UNTIL (num = 0) {
  DISPLAY(num)
  num ← num - 1
}
That program will halt, since num eventually becomes 0.
Compare that to this program that counts up:
num ← 1
REPEAT UNTIL (num = 0) {
  DISPLAY(num)
  num ← num + 1
}
It counts up forever, since num will never equal 0.
Algorithms do exist that can correctly predict that the first program halts and the second program never does. These are simple programs which don't change based on different inputs.
However, no algorithm exists that can analyze any program's code and determine whether it halts or not.

# Turing's Proof Through Contradiction: (Anusha)











# Implications and Further Undecidable Problems (10 minutes):(Justin)
- **Consequences:** Discuss the implications of proving the Halting Problem as undecidable in the realm of computer science.
- **Additional Undecidable Problems:** Introduce other undecidable problems, highlighting their similarities to the Halting Problem.

- The Post Correspondence Problem (PCP)
- **Description:** Given a set of tiles with strings, the PCP seeks a sequence that concatenates to identical top and bottom strings.
- **Undecidability:** Turing demonstrated that no algorithm can determine this sequence for all sets of tiles.

- Rice's Theorem
- **Description:** Deals with non-trivial properties of program behavior.
- **Undecidability:** It states that determining properties like a program's output is undecidable.

- The Collatz Conjecture
- **Description:** Involves iterating a sequence based on a specific rule applied to a positive integer.
- **Undecidability:** Whether this sequence always reaches 1 from any starting number remains unsolved.

-  The Tiling Problem
- **Description:** Determines if a given shape can be tiled perfectly without gaps or overlaps.
- **Undecidability:** Proving whether an arbitrary shape can be tiled without gaps or overlaps is undecidable.

-- The Entscheidungsproblem
- **Description:** Focuses on determining the validity of logical statements within a logical system.
- **Undecidability:** Gödel, Church, and Turing proved the Entscheidungsproblem to be undecidable.




### Additional Resources:
- Provide supplementary resources such as articles, videos, or animations that offer further explanations about undecidable problems for students to explore in-depth.


Undecidable problems are fundamental in computer science, representing tasks that cannot be solved by algorithms regardless of the resources or time available. While some problems might take an extremely long time to solve, undecidable problems have no algorithmic solution.

## Examples of Undecidable Problems


