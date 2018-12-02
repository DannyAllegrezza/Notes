Don't worry about the data persistence, it's generally not the business problem. 

# Strategic Design

* Understanding the business domain
* Modeling the business process
* Identifying sub-systems to build independently (bounded-context)
* Defining a ubiquitous language per sub-system


# Value Objects

# Entities

Something we need to track, locate, retrieve, and store.

An entity or reference type is characterized by having an identity that's not tied to its attribute values. All attributes in an entity can change and it's still "the same" entity.

Two entities might be equivalent in all their attributes but still be distinct from each other.

* Have `identity` and are `mutable`