// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("io",function(a){a.push(Syntax.lib.cStyleFunction);a.push(["return"],{klass:"keywords"});a.push("::= := or and @ + * / - & | ~ ! % < = > [ ] new delete".split(" "),{klass:"operator"});a.push({pattern:/\b([ \t]+([a-z]+))/gi,matches:Syntax.extractMatches({index:2,klass:"function"})});a.push({pattern:/\)([ \t]+([a-z]+))/gi,matches:Syntax.extractMatches({index:2,klass:"function"})});a.push(Syntax.lib.camelCaseType);a.push(Syntax.lib.perlStyleComment);a.push(Syntax.lib.cStyleComment);a.push(Syntax.lib.cppStyleComment);
a.push(Syntax.lib.webLink);a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push(Syntax.lib.stringEscape);a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.hexNumber)});
