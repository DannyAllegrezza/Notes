Don't worry about the data persistence, it's generally not the business problem. 

# Strategic Design

* Understanding the business domain
* Modeling the business process
* Identifying sub-systems to build independently (bounded-context)
* Defining a ubiquitous language per sub-system


# Value Objects
https://deviq.com/value-object/

A Value Object is an immutable type that is distinguishable only by the state of its properties. That is, unlike an Entity, which has a unique identifier and remains distinct even if its properties are otherwise identical, two Value Objects with the exact same properties can be considered equal. Value Objects are a pattern first described in Evans’ Domain-Driven Design book, and further explained in Smith and Lerman’s Domain-Driven Design Fundamentals course.

To produce an immutable type in C#, the type must have all of its state passed in at construction. Any properties must be read-only, which can be achieved using private setters, as in this example:

```c#
public class SomeValue
{
  public SomeValue(int value1, string value2)
  {
    this.Value1 = value1;
    this.Value2 = value2;
  }
 
  public int Value1 { get; private set; }
  public string Value2 { get; private set; }
}
```

Being immutable, Value Objects cannot be changed once they are created. Modifying one is conceptually the same as discarding the old one and creating a new one. Frequently, the Value Object can define helper methods (or extensions methods) that assist with such operations. The built-in string object in the .NET framework is a good example of an immutable type. Converting a string in some manner, such as making it uppercase via ToUpper(), doesn’t actually change the original string but rather creates a new string. Likewise, concatenating two strings doesn’t modify either original string, but rather creates a third one.

Because Value Objects lack identity, they can be compared on the basis of their collective state. If all of their component properties are equal to one another, then two Value Objects can be said to be equal. Again, this is the same as with string types.

Value Objects can be especially useful as a means for describing concepts in an application that have intrinsic rules but which are not themselves entities. In many applications, some concepts that are described as entities would be better off implemented as value objects. For instance, a shipping address could be treated as an Entity, or as a Value Object, but if you were to compare two instances of an address that were both “`123 Main St., Anytown, OH, 12345, USA`” you would expect them to be equal. Two value objects would be, but two entities would not (since they would each have a different ID). This can complicate the application, since checking for duplicates now becomes a concern (which wouldn’t exist if Value Objects had been used).

Generally, validation of Value Objects should not take place in their constructor. Constructors as a rule should not include logic, but should simply assign values. If validation is required, it should be moved to a factory method, and indeed it is a common pattern to make Value Objects’ constructors private, and provide one or more public static methods for creating the Value Object. This achieves separation of concerns, since constructing an instance from a set of values is a separate concern from ensuring the values are valid.

#### References

[Value objects](https://leanpub.com/tdd-ebook/read#leanpub-auto-value-objects)

# Entities

https://deviq.com/entity/

Something we need to track, locate, retrieve, and store.

An entity or reference type is characterized by having an identity that's not tied to its attribute values. All attributes in an entity can change and it's still "the same" entity.

Two entities might be equivalent in all their attributes but still be distinct from each other.

* Have `identity` and are `mutable`

An Entity is an object that has some intrinsic identity, apart from the rest of its state. Even if its properties are the same as another instance of the same type, it remains distinct because of its unique identity. 

As an example, consider a `Person` class, with properties for first name, last name, and birth date. It’s possible that two different instances of `Person` could have the same name and date of birth, but that wouldn’t make them the same person! 

By contrast, consider a mailing address. If two different packages are being shipped to John Smith, 123 Main Street, Anytown, OH 12345, USA, there is no need to track those two separate addresses as Entities. They are the same because their properties (addressee, street, city, etc.) are identical, and as a result they could be modeled as a `Value Object`.