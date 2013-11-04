// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("kai",function(a){a.push("()[]{}".split(""),{klass:"operator"});a.push(Syntax.lib.perlStyleComment);a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.webLink);a.push({pattern:/\(([^\s\(\)]+)/gi,matches:Syntax.extractMatches({klass:"function"})});a.push({pattern:/`[a-z]*/gi,klass:"constant"});a.push(Syntax.lib.multiLineDoubleQuotedString);a.push(Syntax.lib.stringEscape)});
