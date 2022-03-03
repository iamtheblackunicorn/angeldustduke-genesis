---
layout: post
date_time: "2022/03/01"
description: "The first part of a series on how to build a compiler for your own programming language."
title: "How to build a compiler: Part I"
show: true
tags: "compiler rust programming"
---

## Preamble

Many years ago, when I started writing my own code and my own software (I was 12!), I always wondered who wrote the programs that ran my then-written-poorly code and could understand what I was trying to do in my code. When I got more advanced and proficient in some more languages, I started seeing similarities and shared characteristics across different types of programming languages. It was at this point that I decided I want to write a language I would love to use and which was of my own design. I wanted it to be statically typed (declaring types openly) and compiled. As I only knew Dart and Python at the time and maybe a sliver of Javascript, I wanted to learn a solid, compiled, fast language, like Rust. I'm 22 now and have been teaching myself Rust for the past couple of months and recently started on a compiler for my own programming language, ***Sundance***. In this series, I will be teaching others how to write their own compilers, should you be interested in how these things work. But before I do that, I want to start from the beginning.

## How does software work?

When you fire up an app on your 'phone or your personal computer, some code is run to tell the computer what to do. Specifically, someone has written that code to give the computer a specific set of instructions to perform a series of operations. These operations are given to the computer in ones and zeros. However, humans cannot understand a series of ones and zeros, so we invented programming languages to make it easier for us to give instructions to the computer in a format *we* can write and *it* can understand. But somebody, or rather *something*, has to translate our human-readable code into instructions for the computer to execute. This *something* is an interpreter or compiler. Many people throw these two words around quite loosely. Let me briefly explain what the differences between these two are. An interpreter reads code for an interpreted language, like Python, line by line and executes each instruction when it comes across it. It generates the ones and zeros on the fly and hands them to the computer bit by bit. When it is done reading all lines of your code, it has made the computer perform some operations but not actually translated the whole program in one go for the computer to read anywhere anytime. A compiler does just that. It generates a binary file (a bunch of ones and zeros) from your code and *you* then have to instruct the computer to read and run this binary file.

## What are the parts of a compiler?

Now, the code we write as developers is basically just one big string in a text file. So when writing a compiler, we have to write a program that "understands" this big string and generates ones and zeros from it. Such a string could be:

```rust
let my_num: i128 = 4456;
```

This "understanding" undergoes several stages. The first stage is lexing. In the example above, all parts of the statement represent a token. Each token has a name and a value. The name would be something like "integer" and the value would be something like "4456". The lexer splits the big string into all its different component tokens and usually returns a list of the tokens it has encountered. The next part is called an *Abstract Syntax Tree*, or *AST*, for short. This is just a fancy name for a component that tries to determine what sort of statement it has encountered. In the example above, it would see a variable declaration and check if all the prototypical parts of such a declaration are present. This next part is optional but present in most modern compilers. This part is called an *Intermediate Representation*, or *IR*, for short. This component tries to optimize and "delete" parts from the code that do not represent anything useful for final execution of the program. In the example above, if the variable wasn't being used, the *IR* would strip it away. Finally, we have the compilation process. In this step, after having gone through all this analysis, the compiler either maps your code and the structure of your code into another language or straight to machine code. Most compilers these days generate some dialect of Assembly and then link and compile this internally with some back-end like LLVM. In this part of the series we will be focussing on the lexer. I'm assuming you are proficient in Rust, and if not, try to follow along.

## An example implementation of a lexer in Rust.

```rust
use regex::Regex;
use std::collections::HashMap;

/* LEXER START */

/// A struct to store and retrieve data
/// about all lexed tokens.
struct Token {
    name: String,
    value: String
}

/// Populates the [Token] struct with
/// empty values for easier use.
impl Default for Token {
    fn default () -> Token {
        Token {
            name: String::from(""),
            value: String::from("")
        }
    }
}

/// Returns a vector of strings from a character split for a string.
/// Both the string and split character have to be strings.
fn clean_split(subject: String, split_char: String) -> Vec<String> {
    let mut result: Vec<String> = Vec::new();
    for item in subject.split(&split_char) {
        let new_item: String = item.to_string();
        result.push(new_item);
    }
    return result;
}

/// A [HashMap] for tokens the lexer recognises.
fn pattern_pool() -> HashMap<String, Regex>{
    let mut pool: HashMap<String, Regex> = HashMap::new();
    pool.insert(String::from("FLOAT"), Regex::new(r"([0-9]+\.[0-9]+)").unwrap());
    return pool;
}

/// The actual lexing function: Iterates through all lines
/// and then through all characters and builds a vector of tokens
/// while doing so and finally returns this vector.
fn lex(source_code: String) -> Vec<Token>{
    let lines: Vec<String> = clean_split(source_code, String::from("\n"));
    let mut result: Vec<Token> = Vec::new();
    let pool: HashMap<String, Regex> = pattern_pool();
    for line in lines {
        let char_list: Vec<String> = clean_split(line, String::from(""));
        let mut new_char_list: Vec<String> = Vec::new();
        for char_item in char_list {
            new_char_list.push(char_item);
            let collected_chars: String = new_char_list.join("");
            for (key,value) in pool.clone().into_iter() {
                if value.is_match(&collected_chars) {
                    new_char_list.clear();
                    let captured = value.captures(&collected_chars).unwrap();
                    let new_token: Token = Token {
                        name: key,
                        value: captured.get(1).unwrap().as_str().to_string()
                    };
                    result.push(new_token);
                }
                else {}
            }
        }
    }
    return result;
}

fn test_lexer(){
    /// A string with "code" the lexer will be able to
    /// tear apart.
    let tokens: Vec<Token> = lex(String::from("4.5\n6.7"));
    /// We iterate through the recognised tokens and
    /// print their names and types to the console.
    for token in tokens {
        println!("{:?} => {:?}", token.name, token.value);
    }
}

/* LEXER END */
```

## Explanation.

I'm only vaguely going to go through the implementation here and I'm sure it isn't as efficient as it could be. But what is roughly happening here is the following: First I write a data structure that represents a token, the struct called *"Token"*. Next, I define a function that holds all the tokens the compiler recognizes in a sort of dictionary, this is the *"pattern_pool"* function. After this, I actually write the lexer, the *"lex"* function. What happens here is that I split all lines of the big string I get, by new-line characters. New-line characters are characters that represent line breaks in text files. Then I loop through this list of lines. (I go over each line and perform an operation on each line.) The operation I perform on each line is that I split that line into its component characters, so *"H"* would be a character in a line that has *"Hello World!"* in it. I make an empty list of characters and add each character as I encounter it. If the characters together represent a token, I delete the contents of my character list and restart the process. In the end, I am left with a list of tokens. The next part of this series would be about how I write a program that tries to make sense of each of the tokens in the context of their surrounding tokens.

## Notes and final words.

For my implementation of the lexer, I used regular expressions (A language for defining patterns.) and unfortunately had to import a third-party library (A bunch of code that somebody else wrote and has made available to the public.) for this because Rust doesn't have this out of the box.
If you couldn't understand the code above, that is fine, I hope, however, that I satisfied your curiosity to some degree. For all you coders out there, I hope you had fun reading and maybe you build your own languages now or at least start. If you would like to support me, share this article and follow me on [Twitter](https://twitter.com/angeldustduke)! If you want to buy me a coffee, feel free to send me some Ethereum tokens to the address here: [My address](0x5d7551C484bCd8769c57B4921a3FC80193b74Ce3).

You can also read this article on my Hashnode blog [here](https://angeldustduke.hashnode.dev/how-to-build-a-compiler-part-i) or read a pleasant short story on my main blog [here](https://blckunicorn.art/). ***Sundance***'s code is available [here](https://github.com/iamtheblackunicorn/sundance) and you can check out my GitHub profile [here](https://github.com/iamtheblackunicorn).

All that being said, take care of yourselves, have a wonderful day and I hope to see you again soon.
