const e=Object.freeze(JSON.parse('{"displayName":"CodeQL","fileTypes":["ql","qll"],"name":"codeql","patterns":[{"include":"#module-member"}],"repository":{"abstract":{"match":"\\\\b(?:abstract)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.abstract.ql"},"additional":{"match":"\\\\b(?:additional)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.additional.ql"},"and":{"match":"\\\\b(?:and)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.and.ql"},"annotation":{"patterns":[{"include":"#bindingset-annotation"},{"include":"#language-annotation"},{"include":"#pragma-annotation"},{"include":"#annotation-keyword"}]},"annotation-keyword":{"patterns":[{"include":"#abstract"},{"include":"#additional"},{"include":"#bindingset"},{"include":"#cached"},{"include":"#default"},{"include":"#deprecated"},{"include":"#external"},{"include":"#final"},{"include":"#language"},{"include":"#library"},{"include":"#override"},{"include":"#pragma"},{"include":"#private"},{"include":"#query"},{"include":"#signature"},{"include":"#transient"}]},"any":{"match":"\\\\b(?:any)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.quantifier.any.ql"},"arithmetic-operator":{"match":"\\\\+|-|\\\\*|/|%","name":"keyword.operator.arithmetic.ql"},"as":{"match":"\\\\b(?:as)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.as.ql"},"asc":{"match":"\\\\b(?:asc)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.order.asc.ql"},"at-lower-id":{"match":"@[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_])))"},"avg":{"match":"\\\\b(?:avg)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.avg.ql"},"bindingset":{"match":"\\\\b(?:bindingset)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.bindingset.ql"},"bindingset-annotation":{"begin":"((?:\\\\b(?:bindingset)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#bindingset"}]}},"end":"(?!(?:\\\\s|$|(?://|/\\\\*))|\\\\[)|(?<=\\\\])","name":"meta.block.bindingset-annotation.ql","patterns":[{"include":"#bindingset-annotation-body"},{"include":"#non-context-sensitive"}]},"bindingset-annotation-body":{"begin":"((?:\\\\[))","beginCaptures":{"1":{"patterns":[{"include":"#open-bracket"}]}},"end":"((?:\\\\]))","endCaptures":{"1":{"patterns":[{"include":"#close-bracket"}]}},"name":"meta.block.bindingset-annotation-body.ql","patterns":[{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"variable.parameter.ql"}]},"boolean":{"match":"\\\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.type.boolean.ql"},"by":{"match":"\\\\b(?:by)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.order.by.ql"},"cached":{"match":"\\\\b(?:cached)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.cached.ql"},"class":{"match":"\\\\b(?:class)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.class.ql"},"class-body":{"begin":"((?:\\\\{))","beginCaptures":{"1":{"patterns":[{"include":"#open-brace"}]}},"end":"((?:\\\\}))","endCaptures":{"1":{"patterns":[{"include":"#close-brace"}]}},"name":"meta.block.class-body.ql","patterns":[{"include":"#class-member"}]},"class-declaration":{"begin":"((?:\\\\b(?:class)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#class"}]}},"end":"(?<=\\\\}|;)","name":"meta.block.class-declaration.ql","patterns":[{"include":"#class-body"},{"include":"#extends-clause"},{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.class.ql"}]},"class-member":{"patterns":[{"include":"#predicate-or-field-declaration"},{"include":"#annotation"},{"include":"#non-context-sensitive"}]},"close-angle":{"match":">","name":"punctuation.anglebracket.close.ql"},"close-brace":{"match":"\\\\}","name":"punctuation.curlybrace.close.ql"},"close-bracket":{"match":"\\\\]","name":"punctuation.squarebracket.close.ql"},"close-paren":{"match":"\\\\)","name":"punctuation.parenthesis.close.ql"},"comma":{"match":",","name":"punctuation.separator.comma.ql"},"comment":{"patterns":[{"begin":"/\\\\*\\\\*","end":"\\\\*/","name":"comment.block.documentation.ql","patterns":[{"begin":"(?<=/\\\\*\\\\*)([^*]|\\\\*(?!/))*$","patterns":[{"match":"\\\\G\\\\s*(@\\\\S+)","name":"keyword.tag.ql"}],"while":"(^|\\\\G)\\\\s*([^*]|\\\\*(?!/))(?=([^*]|[*](?!/))*$)"}]},{"begin":"/\\\\*","end":"\\\\*/","name":"comment.block.ql"},{"match":"//.*$","name":"comment.line.double-slash.ql"}]},"comment-start":{"match":"//|/\\\\*"},"comparison-operator":{"match":"=|!=","name":"keyword.operator.comparison.ql"},"concat":{"match":"\\\\b(?:concat)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.concat.ql"},"count":{"match":"\\\\b(?:count)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.count.ql"},"date":{"match":"\\\\b(?:date)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.type.date.ql"},"default":{"match":"\\\\b(?:default)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.default.ql"},"deprecated":{"match":"\\\\b(?:deprecated)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.deprecated.ql"},"desc":{"match":"\\\\b(?:desc)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.order.desc.ql"},"dont-care":{"match":"\\\\b(?:_)(?:(?!(?:[0-9A-Za-z_])))","name":"variable.language.dont-care.ql"},"dot":{"match":"\\\\.","name":"punctuation.accessor.ql"},"dotdot":{"match":"\\\\.\\\\.","name":"punctuation.operator.range.ql"},"else":{"match":"\\\\b(?:else)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.else.ql"},"end-of-as-clause":{"match":"(?:(?<=(?:[0-9A-Za-z_]))(?!(?:[0-9A-Za-z_]))(?<!(?<!(?:[0-9A-Za-z_]))as))|(?=\\\\s*(?!(?://|/\\\\*)|(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_])))))\\\\S)|(?=\\\\s*(?:(?:(?:\\\\b(?:_)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:and)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:any)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:as)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:asc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:avg)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:by)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:class)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:concat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:count)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:desc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:else)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:exists)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:extends)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:false)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:forall)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:forex)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:if)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:implies)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:import)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:in)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:max)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:min)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:module)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:none)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:not)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:order)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:rank)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:result)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:string)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:sum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:super)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:then)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:this)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:true)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:unique)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_])))))))"},"end-of-id":{"match":"(?!(?:[0-9A-Za-z_]))"},"exists":{"match":"\\\\b(?:exists)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.quantifier.exists.ql"},"expr-as-clause":{"begin":"((?:\\\\b(?:as)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#as"}]}},"end":"(?:(?:(?<=(?:[0-9A-Za-z_]))(?!(?:[0-9A-Za-z_]))(?<!(?<!(?:[0-9A-Za-z_]))as))|(?=\\\\s*(?!(?://|/\\\\*)|(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_])))))\\\\S)|(?=\\\\s*(?:(?:(?:\\\\b(?:_)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:and)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:any)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:as)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:asc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:avg)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:by)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:class)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:concat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:count)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:desc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:else)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:exists)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:extends)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:false)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:forall)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:forex)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:if)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:implies)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:import)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:in)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:max)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:min)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:module)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:none)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:not)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:order)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:rank)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:result)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:string)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:sum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:super)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:then)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:this)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:true)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:unique)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))))))","name":"meta.block.expr-as-clause.ql","patterns":[{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"variable.other.ql"}]},"extends":{"match":"\\\\b(?:extends)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.extends.ql"},"extends-clause":{"begin":"((?:\\\\b(?:extends)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#extends"}]}},"end":"(?=\\\\{)","name":"meta.block.extends-clause.ql","patterns":[{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.ql"}]},"external":{"match":"\\\\b(?:external)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.external.ql"},"false":{"match":"\\\\b(?:false)(?:(?!(?:[0-9A-Za-z_])))","name":"constant.language.boolean.false.ql"},"final":{"match":"\\\\b(?:final)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.final.ql"},"float":{"match":"\\\\b(?:float)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.type.float.ql"},"float-literal":{"match":"-?\\\\d+\\\\.\\\\d+(?!\\\\d)","name":"constant.numeric.decimal.ql"},"forall":{"match":"\\\\b(?:forall)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.quantifier.forall.ql"},"forex":{"match":"\\\\b(?:forex)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.quantifier.forex.ql"},"from":{"match":"\\\\b(?:from)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.from.ql"},"from-section":{"begin":"((?:\\\\b(?:from)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#from"}]}},"end":"(?=(?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_])))))","name":"meta.block.from-section.ql","patterns":[{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))(?=\\\\s*(?:,|(?:\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|$))","name":"variable.parameter.ql"},{"include":"#module-qualifier"},{"match":"(?:\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.ql"},{"match":"(?:\\\\b[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"variable.parameter.ql"}]},"id-character":{"match":"[0-9A-Za-z_]"},"if":{"match":"\\\\b(?:if)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.if.ql"},"implements":{"match":"\\\\b(?:implements)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.implements.ql"},"implements-clause":{"begin":"((?:\\\\b(?:implements)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#implements"}]}},"end":"(?=\\\\{)","name":"meta.block.implements-clause.ql","patterns":[{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.ql"}]},"implies":{"match":"\\\\b(?:implies)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.implies.ql"},"import":{"match":"\\\\b(?:import)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.import.ql"},"import-as-clause":{"begin":"((?:\\\\b(?:as)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#as"}]}},"end":"(?:(?:(?<=(?:[0-9A-Za-z_]))(?!(?:[0-9A-Za-z_]))(?<!(?<!(?:[0-9A-Za-z_]))as))|(?=\\\\s*(?!(?://|/\\\\*)|(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_])))))\\\\S)|(?=\\\\s*(?:(?:(?:\\\\b(?:_)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:and)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:any)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:as)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:asc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:avg)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:by)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:class)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:concat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:count)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:desc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:else)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:exists)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:extends)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:false)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:forall)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:forex)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:if)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:implies)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:import)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:in)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:max)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:min)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:module)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:none)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:not)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:order)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:rank)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:result)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:string)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:sum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:super)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:then)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:this)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:true)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:unique)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))))))","name":"meta.block.import-as-clause.ql","patterns":[{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.namespace.ql"}]},"import-directive":{"begin":"((?:\\\\b(?:import)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#import"}]}},"end":"(?<!\\\\bimport)(?<=(?:>)|[A-Za-z0-9_])(?!\\\\s*(\\\\.|::|\\\\,|(?:<)))","name":"meta.block.import-directive.ql","patterns":[{"include":"#instantiation-args"},{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.namespace.ql"}]},"in":{"match":"\\\\b(?:in)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.in.ql"},"instanceof":{"match":"\\\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.instanceof.ql"},"instantiation-args":{"begin":"((?:<))","beginCaptures":{"1":{"patterns":[{"include":"#open-angle"}]}},"end":"((?:>))","endCaptures":{"1":{"patterns":[{"include":"#close-angle"}]}},"name":"meta.type.parameters.ql","patterns":[{"include":"#instantiation-args"},{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.namespace.ql"}]},"int":{"match":"\\\\b(?:int)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.type.int.ql"},"int-literal":{"match":"-?\\\\d+(?!\\\\d)","name":"constant.numeric.decimal.ql"},"keyword":{"patterns":[{"include":"#dont-care"},{"include":"#and"},{"include":"#any"},{"include":"#as"},{"include":"#asc"},{"include":"#avg"},{"include":"#boolean"},{"include":"#by"},{"include":"#class"},{"include":"#concat"},{"include":"#count"},{"include":"#date"},{"include":"#desc"},{"include":"#else"},{"include":"#exists"},{"include":"#extends"},{"include":"#false"},{"include":"#float"},{"include":"#forall"},{"include":"#forex"},{"include":"#from"},{"include":"#if"},{"include":"#implies"},{"include":"#import"},{"include":"#in"},{"include":"#instanceof"},{"include":"#int"},{"include":"#max"},{"include":"#min"},{"include":"#module"},{"include":"#newtype"},{"include":"#none"},{"include":"#not"},{"include":"#or"},{"include":"#order"},{"include":"#predicate"},{"include":"#rank"},{"include":"#result"},{"include":"#select"},{"include":"#strictconcat"},{"include":"#strictcount"},{"include":"#strictsum"},{"include":"#string"},{"include":"#sum"},{"include":"#super"},{"include":"#then"},{"include":"#this"},{"include":"#true"},{"include":"#unique"},{"include":"#where"}]},"language":{"match":"\\\\b(?:language)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.language.ql"},"language-annotation":{"begin":"((?:\\\\b(?:language)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#language"}]}},"end":"(?!(?:\\\\s|$|(?://|/\\\\*))|\\\\[)|(?<=\\\\])","name":"meta.block.language-annotation.ql","patterns":[{"include":"#language-annotation-body"},{"include":"#non-context-sensitive"}]},"language-annotation-body":{"begin":"((?:\\\\[))","beginCaptures":{"1":{"patterns":[{"include":"#open-bracket"}]}},"end":"((?:\\\\]))","endCaptures":{"1":{"patterns":[{"include":"#close-bracket"}]}},"name":"meta.block.language-annotation-body.ql","patterns":[{"include":"#non-context-sensitive"},{"match":"\\\\b(?:monotonicAggregates)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.ql"}]},"library":{"match":"\\\\b(?:library)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.library.ql"},"literal":{"patterns":[{"include":"#float-literal"},{"include":"#int-literal"},{"include":"#string-literal"}]},"lower-id":{"match":"\\\\b[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_])))"},"max":{"match":"\\\\b(?:max)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.max.ql"},"min":{"match":"\\\\b(?:min)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.min.ql"},"module":{"match":"\\\\b(?:module)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.module.ql"},"module-body":{"begin":"((?:\\\\{))","beginCaptures":{"1":{"patterns":[{"include":"#open-brace"}]}},"end":"((?:\\\\}))","endCaptures":{"1":{"patterns":[{"include":"#close-brace"}]}},"name":"meta.block.module-body.ql","patterns":[{"include":"#module-member"}]},"module-declaration":{"begin":"((?:\\\\b(?:module)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#module"}]}},"end":"(?<=\\\\}|;)","name":"meta.block.module-declaration.ql","patterns":[{"include":"#module-body"},{"include":"#implements-clause"},{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.namespace.ql"}]},"module-member":{"patterns":[{"include":"#import-directive"},{"include":"#import-as-clause"},{"include":"#module-declaration"},{"include":"#newtype-declaration"},{"include":"#newtype-branch-name-with-prefix"},{"include":"#predicate-parameter-list"},{"include":"#predicate-body"},{"include":"#class-declaration"},{"include":"#select-clause"},{"include":"#predicate-or-field-declaration"},{"include":"#non-context-sensitive"},{"include":"#annotation"}]},"module-qualifier":{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))(?=\\\\s*::)","name":"entity.name.type.namespace.ql"},"newtype":{"match":"\\\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.newtype.ql"},"newtype-branch-name-with-prefix":{"begin":"=|(?:\\\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))","beginCaptures":{"0":{"patterns":[{"include":"#or"},{"include":"#comparison-operator"}]}},"end":"(?:\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","endCaptures":{"0":{"name":"entity.name.type.ql"}},"name":"meta.block.newtype-branch-name-with-prefix.ql","patterns":[{"include":"#non-context-sensitive"}]},"newtype-declaration":{"begin":"((?:\\\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#newtype"}]}},"end":"(?:\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","endCaptures":{"0":{"name":"entity.name.type.ql"}},"name":"meta.block.newtype-declaration.ql","patterns":[{"include":"#non-context-sensitive"}]},"non-context-sensitive":{"patterns":[{"include":"#comment"},{"include":"#literal"},{"include":"#operator-or-punctuation"},{"include":"#keyword"}]},"none":{"match":"\\\\b(?:none)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.quantifier.none.ql"},"not":{"match":"\\\\b(?:not)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.not.ql"},"open-angle":{"match":"<","name":"punctuation.anglebracket.open.ql"},"open-brace":{"match":"\\\\{","name":"punctuation.curlybrace.open.ql"},"open-bracket":{"match":"\\\\[","name":"punctuation.squarebracket.open.ql"},"open-paren":{"match":"\\\\(","name":"punctuation.parenthesis.open.ql"},"operator-or-punctuation":{"patterns":[{"include":"#relational-operator"},{"include":"#comparison-operator"},{"include":"#arithmetic-operator"},{"include":"#comma"},{"include":"#semicolon"},{"include":"#dot"},{"include":"#dotdot"},{"include":"#pipe"},{"include":"#open-paren"},{"include":"#close-paren"},{"include":"#open-brace"},{"include":"#close-brace"},{"include":"#open-bracket"},{"include":"#close-bracket"},{"include":"#open-angle"},{"include":"#close-angle"}]},"or":{"match":"\\\\b(?:or)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.or.ql"},"order":{"match":"\\\\b(?:order)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.order.order.ql"},"override":{"match":"\\\\b(?:override)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.override.ql"},"pipe":{"match":"\\\\|","name":"punctuation.separator.pipe.ql"},"pragma":{"match":"\\\\b(?:pragma)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.pragma.ql"},"pragma-annotation":{"begin":"((?:\\\\b(?:pragma)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#pragma"}]}},"end":"(?!(?:\\\\s|$|(?://|/\\\\*))|\\\\[)|(?<=\\\\])","name":"meta.block.pragma-annotation.ql","patterns":[{"include":"#pragma-annotation-body"},{"include":"#non-context-sensitive"}]},"pragma-annotation-body":{"begin":"((?:\\\\[))","beginCaptures":{"1":{"patterns":[{"include":"#open-bracket"}]}},"end":"((?:\\\\]))","endCaptures":{"1":{"patterns":[{"include":"#close-bracket"}]}},"name":"meta.block.pragma-annotation-body.ql","patterns":[{"match":"\\\\b(?:inline|noinline|nomagic|noopt)\\\\b","name":"storage.modifier.ql"}]},"predicate":{"match":"\\\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.predicate.ql"},"predicate-body":{"begin":"((?:\\\\{))","beginCaptures":{"1":{"patterns":[{"include":"#open-brace"}]}},"end":"((?:\\\\}))","endCaptures":{"1":{"patterns":[{"include":"#close-brace"}]}},"name":"meta.block.predicate-body.ql","patterns":[{"include":"#predicate-body-contents"}]},"predicate-body-contents":{"patterns":[{"include":"#expr-as-clause"},{"include":"#non-context-sensitive"},{"include":"#module-qualifier"},{"match":"(?:\\\\b[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))\\\\s*(?:\\\\*|\\\\+)?\\\\s*(?=\\\\()","name":"entity.name.function.ql"},{"match":"(?:\\\\b[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"variable.other.ql"},{"match":"(?:\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.ql"}]},"predicate-or-field-declaration":{"begin":"(?:(?=(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_])))))(?!(?:(?:(?:\\\\b(?:_)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:and)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:any)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:as)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:asc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:avg)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:by)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:class)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:concat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:count)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:desc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:else)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:exists)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:extends)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:false)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:forall)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:forex)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:if)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:implies)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:import)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:in)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:max)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:min)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:module)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:none)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:not)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:order)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:rank)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:result)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:string)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:sum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:super)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:then)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:this)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:true)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:unique)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))))|(?:(?:(?:\\\\b(?:abstract)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:additional)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:bindingset)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:cached)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:default)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:deprecated)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:external)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:final)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:language)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:library)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:override)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:pragma)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:private)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:query)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:signature)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:transient)(?:(?!(?:[0-9A-Za-z_]))))))))|(?=(?:(?:(?:\\\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:string)(?:(?!(?:[0-9A-Za-z_])))))))|(?=(?:@[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_])))))","end":"(?<=\\\\}|;)","name":"meta.block.predicate-or-field-declaration.ql","patterns":[{"include":"#predicate-parameter-list"},{"include":"#predicate-body"},{"include":"#non-context-sensitive"},{"include":"#module-qualifier"},{"match":"(?:\\\\b[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))(?=\\\\s*;)","name":"variable.field.ql"},{"match":"(?:\\\\b[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.function.ql"},{"match":"(?:\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.ql"}]},"predicate-parameter-list":{"begin":"((?:\\\\())","beginCaptures":{"1":{"patterns":[{"include":"#open-paren"}]}},"end":"((?:\\\\)))","endCaptures":{"1":{"patterns":[{"include":"#close-paren"}]}},"name":"meta.block.predicate-parameter-list.ql","patterns":[{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))(?=\\\\s*(?:,|\\\\)))","name":"variable.parameter.ql"},{"include":"#module-qualifier"},{"match":"(?:\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"entity.name.type.ql"},{"match":"(?:\\\\b[a-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"variable.parameter.ql"}]},"predicate-start-keyword":{"patterns":[{"include":"#boolean"},{"include":"#date"},{"include":"#float"},{"include":"#int"},{"include":"#predicate"},{"include":"#string"}]},"private":{"match":"\\\\b(?:private)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.private.ql"},"query":{"match":"\\\\b(?:query)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.query.ql"},"rank":{"match":"\\\\b(?:rank)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.rank.ql"},"relational-operator":{"match":"<=|<|>=|>","name":"keyword.operator.relational.ql"},"result":{"match":"\\\\b(?:result)(?:(?!(?:[0-9A-Za-z_])))","name":"variable.language.result.ql"},"select":{"match":"\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.query.select.ql"},"select-as-clause":{"begin":"((?:\\\\b(?:as)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#as"}]}},"end":"(?<=(?:[0-9A-Za-z_])(?:(?!(?:[0-9A-Za-z_]))))","match":"meta.block.select-as-clause.ql","patterns":[{"include":"#non-context-sensitive"},{"match":"(?:\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_]))))","name":"variable.other.ql"}]},"select-clause":{"begin":"(?=(?:\\\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))))","end":"(?!(?:\\\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))))","name":"meta.block.select-clause.ql","patterns":[{"include":"#from-section"},{"include":"#where-section"},{"include":"#select-section"}]},"select-section":{"begin":"((?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#select"}]}},"end":"(?=\\\\n)","name":"meta.block.select-section.ql","patterns":[{"include":"#predicate-body-contents"},{"include":"#select-as-clause"}]},"semicolon":{"match":";","name":"punctuation.separator.statement.ql"},"signature":{"match":"\\\\b(?:signature)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.signature.ql"},"simple-id":{"match":"\\\\b[A-Za-z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_])))"},"strictconcat":{"match":"\\\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.strictconcat.ql"},"strictcount":{"match":"\\\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.strictcount.ql"},"strictsum":{"match":"\\\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.strictsum.ql"},"string":{"match":"\\\\b(?:string)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.type.string.ql"},"string-escape":{"match":"\\\\\\\\[\\"\\\\\\\\nrt]","name":"constant.character.escape.ql"},"string-literal":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ql"}},"end":"(\\")|((?:[^\\\\\\\\\\\\n])$)","endCaptures":{"1":{"name":"punctuation.definition.string.end.ql"},"2":{"name":"invalid.illegal.newline.ql"}},"name":"string.quoted.double.ql","patterns":[{"include":"#string-escape"}]},"sum":{"match":"\\\\b(?:sum)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.sum.ql"},"super":{"match":"\\\\b(?:super)(?:(?!(?:[0-9A-Za-z_])))","name":"variable.language.super.ql"},"then":{"match":"\\\\b(?:then)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.other.then.ql"},"this":{"match":"\\\\b(?:this)(?:(?!(?:[0-9A-Za-z_])))","name":"variable.language.this.ql"},"transient":{"match":"\\\\b(?:transient)(?:(?!(?:[0-9A-Za-z_])))","name":"storage.modifier.transient.ql"},"true":{"match":"\\\\b(?:true)(?:(?!(?:[0-9A-Za-z_])))","name":"constant.language.boolean.true.ql"},"unique":{"match":"\\\\b(?:unique)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.aggregate.unique.ql"},"upper-id":{"match":"\\\\b[A-Z][0-9A-Za-z_]*(?:(?!(?:[0-9A-Za-z_])))"},"where":{"match":"\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_])))","name":"keyword.query.where.ql"},"where-section":{"begin":"((?:\\\\b(?:where)(?:(?!(?:[0-9A-Za-z_])))))","beginCaptures":{"1":{"patterns":[{"include":"#where"}]}},"end":"(?=(?:\\\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))))","name":"meta.block.where-section.ql","patterns":[{"include":"#predicate-body-contents"}]},"whitespace-or-comment-start":{"match":"\\\\s|$|(?://|/\\\\*)"}},"scopeName":"source.ql","aliases":["ql"]}'));var a=[e];export{a as default};
