import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "wouter";
import { blogPosts } from "@/lib/data";
import { Comments } from "@/components/ui/comment-reaction";
import { EmojiReactions } from "@/components/ui/emoji-reaction";

const Life2Article = () => {
  const { slug } = useParams(); // from /article/:slug route

  const post = blogPosts.find((p) => p.slug === slug);

  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes((prev) => prev + 1);

  const handleShare = async () => {
    const shareData = {
      title: post?.title ?? "Article",
      text: "Check out this motivational story!",
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
  if (post.slug === "Life2Article") {
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
              <CardHeader className="text-3xl font-bold text-center text-Light">
                Learn from your past — but don’t let it define your future
              </CardHeader>
              <CardContent className="space-y- text-lg leading-relaxed">
                <img
                  src="/images/8152461-BELIEVE-IN-YOURSELF-Wallpaper (1).jpg"
                  alt="Motivational Story Cover"
                  width={1200}
                  height={500}
                  className="rounded-xl mx-auto"
                />

                <p>
                  Sometimes, when we reflect on our past, we feel a deep sense
                  of regret or sadness. We wonder,{" "}
                  <em>“Why did I make those mistakes?”</em>,{" "}
                  <em>“Why couldn’t I understand things earlier?”</em> And these
                  thoughts often hold us back from moving forward.
                </p>
                <p>
                  But life isn’t just about the mistakes we’ve made — it’s about
                  not repeating them.
                </p>
                <p>Today, I want to share</p>
                <h2 className="text-2xl font-semibold pt-6">My Story</h2>
                <p>
                  There came a point in my life when things started to change —
                  I experienced new beginnings, a few moments of joy — and I
                  kept moving forward.
                </p>
                <p>
                  I completed my 12th in commerce, and then took a leap into the
                  world of computers by enrolling in <strong>BCA</strong>.I
                  stepped into this new domain with hope and ambition.
                </p>
                <p>
                  During my BCA journey, I initially thought I was doing
                  something different — something unique. But soon, I realized I
                  was wrong. Everyone around me was entering the world of
                  computers too. But by then, I had already taken my first steps
                  into the tech world.
                </p>
                <p>
                  Like many students, I used to procrastinate{" "}
                  <em>"I'll study tomorrow, today I’m not in the mood..."</em>{" "}
                  and days passed by. Slowly, learning stopped. And when I saw
                  others progressing or landing jobs, I felt a sting —{" "}
                  <em>"If only I had done what they did…"</em> But that’s where
                  we make a big mistake —{" "}
                  <strong>
                    we get so busy watching others that we forget to work on
                    ourselves.
                  </strong>
                </p>
                <p>
                  After completing my BCA, job opportunities were limited. The
                  knowledge I had wasn’t enough for what companies expected. So
                  I decided to pursue{" "}
                  <strong>MCA (Master of Computer Applications)</strong> with
                  one goal — placement. I searched for colleges, visited many
                  campuses, and finally took admission in a medium-tier college.
                </p>
                <p>
                  But soon, I learned that getting placed wasn’t going to be
                  that easy.
                </p>
                <p>
                  After 1.5 years of MCA and giving countless interviews, one
                  thing a professor said really stuck with me:
                </p>

                <blockquote className="italic border-l-4 pl-4 border-primary text-muted-foreground">
                  "You can have certificates from the biggest companies, but if
                  you can’t answer a basic question — that certificate is
                  worthless."
                </blockquote>

                <p>
                  That hit hard. Today, students hesitate to ask questions out
                  of fear. But if we don’t ask, we don’t learn. Eventually, I
                  cracked a job in an MNC in Gandhinagar — a proud moment.
                  But...
                </p>

                <blockquote className="italic border-l-4 pl-4 border-primary text-muted-foreground">
                  The real story was just about to begin.
                </blockquote>

                <h2 className="text-2xl font-semibold pt-6">Takeaway</h2>
                <p>
                  Don't be trapped by your past. Everyone makes mistakes. What
                  matters is whether you <strong>learn</strong> from them and{" "}
                  <strong>move forward</strong>.
                </p>

                <p>
                  ✨ Who you are today is a result of your past decisions.{" "}
                  <br />
                  But <strong>who you become tomorrow</strong> depends on what
                  you do <strong>today</strong>.
                </p>
              </CardContent>
              <div className="border-t border-border p-6">
                <EmojiReactions />
                <Comments />
              </div>
            </Card>

            {/* --- Like, Share, Comment Section --- */}
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

export default Life2Article;
