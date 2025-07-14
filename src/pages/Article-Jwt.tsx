import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { useParams } from "wouter";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Comments } from "@/components/ui/comment-reaction";
import { EmojiReactions } from "@/components/ui/emoji-reaction";

const ArticleJwt = () => {
  const { slug } = useParams(); // Get dynamic :slug from URL
  const post = blogPosts.find((p) => p.slug === slug);

  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes((prev) => prev + 1);

  const handleShare = async () => {
    const shareData = {
      title: post?.title ?? "Article",
      text: "Check out this article on JSON Web Tokens (JWT)!",
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  if (!post) {
    return (
      <div className="p-10 text-center text-red-500">Article not found</div>
    );
  }
  if (post.slug === "Article-Jwt") {
    return (
      <div className="min-h-screen pt-16 bg-background text-foreground">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <button
              onClick={() => window.history.back()}
              className="mt-4 px-4 py-2 rounded bg-muted hover:bg-muted/70 text-sm"
            >
              ← Go Back
            </button>

            <Card className="overflow-hidden border border-border rounded-xl shadow-xl">
              <CardHeader className="text-3xl font-bold text-center">
                JSON Web Token (JWT)
              </CardHeader>
              <CardContent className="space-y-6 text-lg leading-relaxed">
                <img
                  src="/images/cover.png"
                  alt="JWT Cover"
                  width={1200}
                  height={500}
                  className="rounded-xl mx-auto"
                />

                <p>
                  JSON Web Token (JWT) is a compact, self-contained way of
                  securely transmitting information between two parties as a
                  JSON object. It's commonly used for authentication and
                  authorization in modern web applications.
                </p>

                <h2 className="text-2xl font-semibold pt-6">Why JWT?</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Secure:</strong> Signed with a secret or
                    public/private key
                  </li>
                  <li>
                    <strong>Stateless:</strong> Server does not need to store
                    session info
                  </li>
                  <li>
                    <strong>Lightweight:</strong> Small and fast to transmit
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold pt-6">
                  Structure of a JWT
                </h2>
                <p>JWTs have three parts separated by dots (.):</p>
                <p className="font-mono text-base">
                  &lt;Header&gt;.&lt;Payload&gt;.&lt;Signature&gt;
                </p>

                <img
                  src="/images/json-web-token.png"
                  alt="JWT Breakdown"
                  width={1000}
                  height={500}
                  className="rounded-xl mx-auto"
                />

                <h3 className="text-xl font-semibold pt-4">1. Header</h3>
                <pre className="bg-muted p-4 rounded-md text-sm">
                  {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
                </pre>

                <h3 className="text-xl font-semibold pt-4">2. Payload</h3>
                <pre className="bg-muted p-4 rounded-md text-sm">
                  {`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`}
                </pre>

                <h3 className="text-xl font-semibold pt-4">3. Signature</h3>
                <pre className="bg-muted p-4 rounded-md text-sm whitespace-pre-wrap">
                  {`HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)`}
                </pre>

                <img
                  src="/images/what-is-jwt-cover.png"
                  alt="JWT Signing"
                  width={1000}
                  height={500}
                  className="rounded-xl mx-auto"
                />

                <h2 className="text-2xl font-semibold pt-6">How JWT Works</h2>
                <ol className="list-decimal list-inside space-y-1">
                  <li>User logs in with credentials</li>
                  <li>Server verifies and generates JWT</li>
                  <li>JWT is sent to the client</li>
                  <li>Client stores the token (localStorage or cookies)</li>
                  <li>
                    Client sends token in Authorization header with requests
                  </li>
                  <li>Server verifies token and processes request</li>
                </ol>

                <h2 className="text-2xl font-semibold pt-6">
                  Real-world Analogy
                </h2>
                <p>JWT is like a movie ticket:</p>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Payload:</strong> Your seat number and movie time
                  </li>
                  <li>
                    <strong>Signature:</strong> Barcode ensuring authenticity
                  </li>
                </ul>

                <p>
                  The theatre (server) scans the ticket without asking the
                  database (session store).
                </p>

                <img
                  src="/images/c098fa07deca1062e013d92cabba4ba7ec7e7f19-1584x988.png"
                  alt="JWT Encoding Flow"
                  width={1000}
                  height={500}
                  className="rounded-xl mx-auto"
                />

                <h2 className="text-2xl font-semibold pt-6">
                  Security Best Practices
                </h2>
                <ul className="list-disc list-inside">
                  <li>Use HTTPS only</li>
                  <li>Keep the secret key safe</li>
                  <li>Set short expiration times (`exp` claim)</li>
                  <li>Avoid sensitive data in the payload</li>
                  <li>Use refresh tokens for long sessions</li>
                </ul>

                <h2 className="text-2xl font-semibold pt-6">
                  Tools to Work with JWT
                </h2>
                <ul className="list-disc list-inside">
                  <li>
                    <a href="https://jwt.io" className="underline text-primary">
                      jwt.io
                    </a>{" "}
                    for decoding and testing tokens
                  </li>
                  <li>
                    <strong>Libraries:</strong> Node.js: jsonwebtoken, .NET:
                    System.IdentityModel.Tokens.Jwt, Python: PyJWT
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold pt-6">
                  Where JWT is Used
                </h2>
                <ul className="list-disc list-inside">
                  <li>Authentication in SPAs</li>
                  <li>Authorization in APIs</li>
                  <li>Mobile apps and microservices</li>
                  <li>OAuth and Single Sign-On (SSO)</li>
                </ul>

                <h2 className="text-2xl font-semibold pt-6">Summary Table</h2>
                <div className="grid grid-cols-2 gap-4 bg-muted p-4 rounded-xl">
                  <div>
                    <strong>Concept</strong>
                  </div>
                  <div>
                    <strong>Description</strong>
                  </div>
                  <div>Token Type</div>
                  <div>JWT</div>
                  <div>Purpose</div>
                  <div>Authentication & Authorization</div>
                  <div>Structure</div>
                  <div>Header + Payload + Signature</div>
                  <div>Format</div>
                  <div>Base64 encoded & signed</div>
                  <div>Verification</div>
                  <div>Using secret or public key</div>
                </div>

                <h2 className="text-2xl font-semibold pt-6">Final Thoughts</h2>
                <p>
                  JWTs offer a secure, scalable, and efficient way to manage
                  authentication. When implemented correctly, they simplify
                  handling of user sessions across platforms.
                </p>

                <img
                  src="/images/what-is-jwt-cover.png"
                  alt="JWT Final Summary"
                  width={1000}
                  height={500}
                  className="rounded-xl mx-auto"
                />
              </CardContent>
              <EmojiReactions />
              <Comments />
            </Card>
            {/* --- Like, Share, Print Buttons --- */}
            <div className="space-y-8 border border-border rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <Button onClick={handleLike}>👍 Like ({likes})</Button>
                <Button onClick={handleShare}>📤 Share</Button>
                <Button onClick={() => window.print()}>🖨️ Print as PDF</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default ArticleJwt;
