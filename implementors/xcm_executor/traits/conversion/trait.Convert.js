(function() {var implementors = {
"xcm_primitives":[["impl&lt;AssetId, AssetType, AssetIdInfoGetter&gt; Convert&lt;MultiLocation, AssetId&gt; for <a class=\"struct\" href=\"xcm_primitives/struct.AsAssetType.html\" title=\"struct xcm_primitives::AsAssetType\">AsAssetType</a>&lt;AssetId, AssetType, AssetIdInfoGetter&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;AssetType: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;MultiLocation&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;MultiLocation&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;AssetIdInfoGetter: <a class=\"trait\" href=\"xcm_primitives/trait.AssetTypeGetter.html\" title=\"trait xcm_primitives::AssetTypeGetter\">AssetTypeGetter</a>&lt;AssetId, AssetType&gt;,</span>"],["impl&lt;AccountId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">20</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">20</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; Convert&lt;MultiLocation, AccountId&gt; for <a class=\"struct\" href=\"xcm_primitives/struct.Account20Hash.html\" title=\"struct xcm_primitives::Account20Hash\">Account20Hash</a>&lt;AccountId&gt;"],["impl&lt;Origin:&nbsp;OriginTrait + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, AccountId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">20</a>]&gt;, Network:&nbsp;Get&lt;NetworkId&gt;&gt; Convert&lt;Origin, MultiLocation&gt; for <a class=\"struct\" href=\"xcm_primitives/struct.SignedToAccountId20.html\" title=\"struct xcm_primitives::SignedToAccountId20\">SignedToAccountId20</a>&lt;Origin, AccountId, Network&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Origin::PalletsOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RawOrigin&lt;AccountId&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;RawOrigin&lt;AccountId&gt;, Error = Origin::PalletsOrigin&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()