// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("haskell",function(a){a.push(["True","False"],{klass:"constant"});a.push("as;case;of;class;data;data family;data instance;default;deriving;deriving instance;do;forall;foreign;hiding;if;then;else;import;infix;infixl;infixr;instance;let;in;mdo;module;newtype;proc;qualified;rec;type;type family;type instance;where".split(";"),{klass:"keyword"});a.push("` | \\ - -< -<< -> * ? ?? # <- @ ! :: _ ~ > ; { }".split(" "),{klass:"operator"});a.push(Syntax.lib.camelCaseType);a.push({pattern:/\-\-.*$/gm,
klass:"comment",allow:["href"]});a.push({pattern:/\{\-[\s\S]*?\-\}/gm,klass:"comment",allow:["href"]});a.push(Syntax.lib.webLink);a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.hexNumber);a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push(Syntax.lib.stringEscape)});
