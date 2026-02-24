import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Zap, BookOpen, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold font-poppins">Transformer Guide</span>
          </div>
          <div className="flex gap-6 items-center text-sm">
            <button
              onClick={() => setActiveSection("overview")}
              className={`transition-colors ${
                activeSection === "overview"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.nav.overview}
            </button>
            <button
              onClick={() => setActiveSection("architecture")}
              className={`transition-colors ${
                activeSection === "architecture"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.nav.architecture}
            </button>
            <button
              onClick={() => setActiveSection("timeline")}
              className={`transition-colors ${
                activeSection === "timeline"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.nav.timeline}
            </button>
            {/* Language Switcher */}
            <div className="flex gap-2 ml-4 pl-4 border-l border-border">
              <button
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-1 px-3 py-1 rounded transition-colors ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe className="w-4 h-4" />
                EN
              </button>
              <button
                onClick={() => setLanguage("zh")}
                className={`flex items-center gap-1 px-3 py-1 rounded transition-colors ${
                  language === "zh"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe className="w-4 h-4" />
                中文
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="display-lg mb-6">
                {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>{" "}
                {t.hero.titleEnd}
              </h1>
              <p className="body-lg text-muted-foreground mb-8">{t.hero.description}</p>
              <div className="flex gap-4">
                <Button
                  onClick={() => setActiveSection("architecture")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {t.hero.learnNow} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline">{t.hero.documentation}</Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/uRtbGGQWFUKj5RXbYC5Vrx-img-1_1771946966000_na1fn_dHJhbnNmb3JtZXItaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQ282RGJ1RnBXdjRrTnBvdXFDYkRpZC9zYW5kYm94L3VSdGJHR1FXRlVLajVSWGJZQzVWcngtaW1nLTFfMTc3MTk0Njk2NjAwMF9uYTFmbl9kSEpoYm5ObWIzSnRaWEl0YUdWeWJ3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=URYNZ7QQ1WLWpN42E5jJqAy9kypCvgNJdLAjaHjiOjFWyvd-symb3l5i4YIDcmUX2noZCYvRq59a1N0KIZhFLZ-5px~1iOdlaPPdF~1RNQgZ0j022RgiLbTdjqH00OMjrsvyymhT7koxm0W-SiXZV2oXaLzJ35TBoQBre6QbXBiNeB49DQ4mlOMXyy4b8587j~gMRD-gDyUB0u1YzVyHMwIZZ2M72Tmvsr~~MEQLHcmgzpIIYAc3V9kZ9wEQjDsTrOC5zwC5T~OICp6xqX6UfwKHBUseamHAaQaPDm1uJp7nFRMxqwTTWgf7SGgHNkmg6uewaCGHC2AsMgmIKDeO5Q__"
                alt="Transformer Architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeSection === "overview" && (
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="heading-lg mb-12">{t.overview.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.overview.cards.map((card, index) => (
                <Card key={index} className="p-6">
                  {index === 0 && <Brain className="w-8 h-8 text-primary mb-4" />}
                  {index === 1 && <Zap className="w-8 h-8 text-accent mb-4" />}
                  {index === 2 && <BookOpen className="w-8 h-8 text-primary mb-4" />}
                  <h3 className="heading-sm mb-3">{card.title}</h3>
                  <p className="body-sm text-muted-foreground">{card.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === "architecture" && (
        <section className="py-16">
          <div className="container">
            <h2 className="heading-lg mb-12">{t.architecture.title}</h2>
            <div className="space-y-8">
              {t.architecture.components.map((component, index) => (
                <Card key={index} className="p-8">
                  <h3 className="heading-md mb-4">{component.title}</h3>
                  <p className="body-md text-muted-foreground mb-4">{component.description}</p>
                  {index === 0 && (
                    <img
                      src="https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/uRtbGGQWFUKj5RXbYC5Vrx-img-4_1771946971000_na1fn_dG9rZW4tZW1iZWRkaW5n.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQ282RGJ1RnBXdjRrTnBvdXFDYkRpZC9zYW5kYm94L3VSdGJHR1FXRlVLajVSWGJZQzVWcngtaW1nLTRfMTc3MTk0Njk3MTAwMF9uYTFmbl9kRzlyWlc0dFpXMWlaV1JrYVc1bi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PfT-0powzGoJrkmmwMMut-KpQ7i2ZvSWQcBK98hh8fPbrjn9WegOD2jWVlBCdfCnzOsTO5f8G1vLaDwahYbB307EoBYrDSU~LxMrgtxh9Hlqr~-BTKBocDJBgUk7wgDGu5t25i4VBBoujj~D5VGnobfYUim9Dsnf-fgBv7OEMgJsYslTzaJpoFFIEYsd3k4lbM421QXLZzf2QSLKpkgc6-1JfskU3z5a9X7FCHzx43GAkGtp6xATOrw0oJdelYI3UW6ciFyFIbsb1ooNQnYIsOGwR2BaD9kq7udCEmCIIv2OaYdGqCq3W60FOzN~KptJyCqkVaushTe5bqneMHykxQ__"
                      alt="Token Embedding"
                      className="w-full rounded-lg"
                    />
                  )}
                  {index === 1 && (
                    <img
                      src="https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/uRtbGGQWFUKj5RXbYC5Vrx-img-2_1771946956000_na1fn_YXR0ZW50aW9uLW1lY2hhbmlzbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQ282RGJ1RnBXdjRrTnBvdXFDYkRpZC9zYW5kYm94L3VSdGJHR1FXRlVLajVSWGJZQzVWcngtaW1nLTJfMTc3MTk0Njk1NjAwMF9uYTFmbl9ZWFIwWlc1MGFXOXVMVzFsWTJoaGJtbHpiUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=G~UGfYDIJyuu7l0Jyf5DTzE6aU-HgzfSYQUxJfBYzXZE7CQ0NAk9IqGs-h0BQn7GirKRohr4MvDygmlv1F9Vv0FbS-a4CkoNmk1YwGHbJknrlLSmCNHUQsaquZd5kBJQ84s~pgNH4QsrifKDEmc2K3M3LhE225zdNJDxIalQ-ea0uyWgtU8SSOlDh65yesIq9BABXoJw~8p-YqfpZWQenHdHbDddzuL598XaUHXg8rU~2DigClIgLRepYUu-6WCh-0YwMI64ojAxaWRXBah8FWzyZTQ8wjy-k~qdz5uEXmmmCpQDWfTGrJ8~cFSMtUEeemQ3a8eo~~DldN8vVV5cwA__"
                      alt="Self-Attention Mechanism"
                      className="w-full rounded-lg"
                    />
                  )}
                  {index === 2 && (
                    <img
                      src="https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/uRtbGGQWFUKj5RXbYC5Vrx-img-3_1771946956000_na1fn_dHJhbnNmb3JtZXItYmxvY2tz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQ282RGJ1RnBXdjRrTnBvdXFDYkRpZC9zYW5kYm94L3VSdGJHR1FXRlVLajVSWGJZQzVWcngtaW1nLTNfMTc3MTk0Njk1NjAwMF9uYTFmbl9kSEpoYm5ObWIzSnRaWEl0WW14dlkydHoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uMcwb5bp~zyCfbFDl6K32slepxPRghkGHw-q8tdMwy8xf4gE3LTZ1-TikEz7V60h-TDAxMtPei~yEeXJ6uKHNY893gSWKlU0TeZxD8Mcwc7yKBuUn1jn9rudRjOOwAtNn-0aNn2mlggi1hA46Me0p2HjIlq367Bz11CA1zlgYNFti6G6I5TbIis1~3K~wud6f-Fovks-7b7cjTulktnSvesuISUNBtM1aYUfpOsZix0-jXUcKVFRZ1ZIoeqB-gSe5KBcGnY4vLWVPY9H72k7ao~akILShBowfjs68ffQgxhGRh7HxPB4kJ5JBnRX7gfvTqQ9ACeVAZKK9TJWyunHIw__"
                      alt="Transformer Blocks"
                      className="w-full rounded-lg"
                    />
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === "timeline" && (
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="heading-lg mb-12">{t.timeline.title}</h2>
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/Co6DbuFpWv4kNpouqCbDid/sandbox/uRtbGGQWFUKj5RXbYC5Vrx-img-5_1771946959000_na1fn_Z3B0LXRpbWVsaW5l.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQ282RGJ1RnBXdjRrTnBvdXFDYkRpZC9zYW5kYm94L3VSdGJHR1FXRlVLajVSWGJZQzVWcngtaW1nLTVfMTc3MTk0Njk1OTAwMF9uYTFmbl9aM0IwTFhScGJXVnNhVzVsLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kau2TjJrf2V-KhIwk9gBBStNjEFFy4c9JHjQHW-a6geMw226aq63XCMbWDRcC54x3ZyPoP6pMYqeFXyLgcZA8NQyfCzsnTaE8TVzsM64tc6aTXuglmRhkRw7QqogH391DKxMMoHL4jWGcAqViBZl5heZmXrs8cYPxzOigbhLkS5mws57E6n743XC4qceT3qZyQ4bm70NqBlbrqHB8UfYsikAluj6-6PDc0juR~O-0Gl8nkRDyPR2hV~3O~Q__"
              alt="Evolution of Transformer Models"
              className="w-full rounded-lg"
            />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
