// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("assembly",function(a){a.push(Syntax.lib.cStyleComment);a.push(Syntax.lib.cppStyleComment);a.push({pattern:/\.[a-zA-Z_][a-zA-Z0-9_]*/gm,klass:"directive"});a.push({pattern:/^[a-zA-Z_][a-zA-Z0-9_]*:/gm,klass:"label"});a.push({pattern:/^\s*([a-zA-Z]+)/gm,matches:Syntax.extractMatches({klass:"function"})});a.push({pattern:/(-[0-9]+)|(\b[0-9]+)|(\$[0-9]+)/g,klass:"constant"});a.push({pattern:/(\-|\b|\$)(0x[0-9a-f]+|[0-9]+|[a-z0-9_]+)/gi,klass:"constant"});a.push({pattern:/%\w+/g,klass:"register"});
a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push(Syntax.lib.stringEscape);a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.hexNumber);a.push(Syntax.lib.perlStyleComment);a.push(Syntax.lib.webLink)});
