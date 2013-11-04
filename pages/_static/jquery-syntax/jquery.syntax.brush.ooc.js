// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("ooc",function(a){a.push(["this","super","true","false","null",/[A-Z][A-Z0-9_]+/g],{klass:"constant"});a.push("Int Int8 Int16 Int32 Int64 Int80 Int128 UInt UInt8 UInt16 UInt32 UInt64 UInt80 UInt128 Octet Short UShort Long ULong LLong ULLong Float Double LDouble Float32 Float64 Float128 Char UChar WChar String Void Pointer Bool SizeT This".split(" "),{klass:"type"});a.push("class interface implement abstract extends from const final static import use extern inline proto break continue fallthrough operator if else for while do switch case as in version return include cover func".split(" "),
{klass:"keyword"});a.push("+ - * / += -= *= /= = := == != ! % ? > < >= <= && || & | ^ . ~ .. >> << >>> <<< >>= <<= >>>= <<<= %= ^= @".split(" "),{klass:"operator"});a.push({pattern:/0[xcb][0-9a-fA-F]+/g,klass:"constant"});a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.camelCaseType);a.push(Syntax.lib.cStyleType);a.push(Syntax.lib.cStyleFunction);a.push(Syntax.lib.cStyleComment);a.push(Syntax.lib.cppStyleComment);a.push(Syntax.lib.webLink);a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);
a.push(Syntax.lib.stringEscape);a.processes["function"]=Syntax.lib.webLinkProcess("http://docs.ooc-lang.org/search.html?q=")});
