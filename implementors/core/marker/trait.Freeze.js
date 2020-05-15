(function() {var implementors = {};
implementors["intrusive_collections"] = [{"text":"impl&lt;Pointer&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/struct.DefaultPointerOps.html\" title=\"struct intrusive_collections::DefaultPointerOps\">DefaultPointerOps</a>&lt;Pointer&gt;","synthetic":true,"types":["intrusive_collections::pointer_ops::DefaultPointerOps"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/struct.UnsafeRef.html\" title=\"struct intrusive_collections::UnsafeRef\">UnsafeRef</a>&lt;T&gt;","synthetic":true,"types":["intrusive_collections::unsafe_ref::UnsafeRef"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"intrusive_collections/enum.Bound.html\" title=\"enum intrusive_collections::Bound\">Bound</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::Bound"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.Link.html\" title=\"struct intrusive_collections::linked_list::Link\">Link</a>","synthetic":true,"types":["intrusive_collections::linked_list::Link"]},{"text":"impl Freeze for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.LinkOps.html\" title=\"struct intrusive_collections::linked_list::LinkOps\">LinkOps</a>","synthetic":true,"types":["intrusive_collections::linked_list::LinkOps"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.Cursor.html\" title=\"struct intrusive_collections::linked_list::Cursor\">Cursor</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::linked_list::Cursor"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.CursorMut.html\" title=\"struct intrusive_collections::linked_list::CursorMut\">CursorMut</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::linked_list::CursorMut"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.LinkedList.html\" title=\"struct intrusive_collections::linked_list::LinkedList\">LinkedList</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::linked_list::LinkedList"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.Iter.html\" title=\"struct intrusive_collections::linked_list::Iter\">Iter</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::linked_list::Iter"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/linked_list/struct.IntoIter.html\" title=\"struct intrusive_collections::linked_list::IntoIter\">IntoIter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::linked_list::IntoIter"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.Link.html\" title=\"struct intrusive_collections::rbtree::Link\">Link</a>","synthetic":true,"types":["intrusive_collections::rbtree::Link"]},{"text":"impl Freeze for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.LinkOps.html\" title=\"struct intrusive_collections::rbtree::LinkOps\">LinkOps</a>","synthetic":true,"types":["intrusive_collections::rbtree::LinkOps"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.Cursor.html\" title=\"struct intrusive_collections::rbtree::Cursor\">Cursor</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::rbtree::Cursor"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.CursorMut.html\" title=\"struct intrusive_collections::rbtree::CursorMut\">CursorMut</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::rbtree::CursorMut"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.RBTree.html\" title=\"struct intrusive_collections::rbtree::RBTree\">RBTree</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::rbtree::RBTree"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.InsertCursor.html\" title=\"struct intrusive_collections::rbtree::InsertCursor\">InsertCursor</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::rbtree::InsertCursor"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.Iter.html\" title=\"struct intrusive_collections::rbtree::Iter\">Iter</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::rbtree::Iter"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/rbtree/struct.IntoIter.html\" title=\"struct intrusive_collections::rbtree::IntoIter\">IntoIter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::rbtree::IntoIter"]},{"text":"impl Freeze for <a class=\"enum\" href=\"intrusive_collections/rbtree/enum.Color.html\" title=\"enum intrusive_collections::rbtree::Color\">Color</a>","synthetic":true,"types":["intrusive_collections::rbtree::Color"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"enum\" href=\"intrusive_collections/rbtree/enum.Entry.html\" title=\"enum intrusive_collections::rbtree::Entry\">Entry</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::rbtree::Entry"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.Link.html\" title=\"struct intrusive_collections::singly_linked_list::Link\">Link</a>","synthetic":true,"types":["intrusive_collections::singly_linked_list::Link"]},{"text":"impl Freeze for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.LinkOps.html\" title=\"struct intrusive_collections::singly_linked_list::LinkOps\">LinkOps</a>","synthetic":true,"types":["intrusive_collections::singly_linked_list::LinkOps"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.Cursor.html\" title=\"struct intrusive_collections::singly_linked_list::Cursor\">Cursor</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::singly_linked_list::Cursor"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.CursorMut.html\" title=\"struct intrusive_collections::singly_linked_list::CursorMut\">CursorMut</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::singly_linked_list::CursorMut"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.SinglyLinkedList.html\" title=\"struct intrusive_collections::singly_linked_list::SinglyLinkedList\">SinglyLinkedList</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::singly_linked_list::SinglyLinkedList"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.Iter.html\" title=\"struct intrusive_collections::singly_linked_list::Iter\">Iter</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::singly_linked_list::Iter"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/singly_linked_list/struct.IntoIter.html\" title=\"struct intrusive_collections::singly_linked_list::IntoIter\">IntoIter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::singly_linked_list::IntoIter"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.Link.html\" title=\"struct intrusive_collections::xor_linked_list::Link\">Link</a>","synthetic":true,"types":["intrusive_collections::xor_linked_list::Link"]},{"text":"impl Freeze for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.LinkOps.html\" title=\"struct intrusive_collections::xor_linked_list::LinkOps\">LinkOps</a>","synthetic":true,"types":["intrusive_collections::xor_linked_list::LinkOps"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.Cursor.html\" title=\"struct intrusive_collections::xor_linked_list::Cursor\">Cursor</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::xor_linked_list::Cursor"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.CursorMut.html\" title=\"struct intrusive_collections::xor_linked_list::CursorMut\">CursorMut</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::xor_linked_list::CursorMut"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.XorLinkedList.html\" title=\"struct intrusive_collections::xor_linked_list::XorLinkedList\">XorLinkedList</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::xor_linked_list::XorLinkedList"]},{"text":"impl&lt;'a, A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.Iter.html\" title=\"struct intrusive_collections::xor_linked_list::Iter\">Iter</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::xor_linked_list::Iter"]},{"text":"impl&lt;A&gt; Freeze for <a class=\"struct\" href=\"intrusive_collections/xor_linked_list/struct.IntoIter.html\" title=\"struct intrusive_collections::xor_linked_list::IntoIter\">IntoIter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;A as <a class=\"trait\" href=\"intrusive_collections/trait.Adapter.html\" title=\"trait intrusive_collections::Adapter\">Adapter</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.Adapter.html#associatedtype.LinkOps\" title=\"type intrusive_collections::Adapter::LinkOps\">LinkOps</a> as <a class=\"trait\" href=\"intrusive_collections/trait.LinkOps.html\" title=\"trait intrusive_collections::LinkOps\">LinkOps</a>&gt;::<a class=\"type\" href=\"intrusive_collections/trait.LinkOps.html#associatedtype.LinkPtr\" title=\"type intrusive_collections::LinkOps::LinkPtr\">LinkPtr</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["intrusive_collections::xor_linked_list::IntoIter"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()